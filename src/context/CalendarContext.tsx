import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CalendarEvent, CalendarTask, CalendarViewType, TaskStatus, EventCategory } from '@/types/calendar';
import { fetchAllCalendarItems } from '@/services/calendarService';
import { toast } from 'sonner';
import { 
  WeatherData, 
  fetchCurrentWeather, 
  getUserLocation, 
  getLocationName,
  fetchMultiDayWeather
} from '@/services/weatherService';
import { getEventCategoryColor } from '@/utils/category-utils';

interface CalendarContextType {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  events: CalendarEvent[];
  tasks: CalendarTask[];
  viewType: CalendarViewType;
  setViewType: (type: CalendarViewType) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  loading: boolean;
  refreshCalendar: () => Promise<void>;
  updateTaskStatus: (taskId: string, status: TaskStatus) => Promise<void>;
  updateEventRsvp: (eventId: string, status: 'attending' | 'not_attending' | 'maybe') => Promise<void>;
  weatherData: WeatherData | null;
  multiDayWeatherData: WeatherData[];
  locationName: string | null;
  refreshWeather: () => Promise<void>;
  getEventCategoryColor: (category: string) => string;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
}

interface CalendarProviderProps {
  children: ReactNode;
}

export function CalendarProvider({ children }: CalendarProviderProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [tasks, setTasks] = useState<CalendarTask[]>([]);
  const [viewType, setViewType] = useState<CalendarViewType>('month');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [multiDayWeatherData, setMultiDayWeatherData] = useState<WeatherData[]>([]);
  const [locationName, setLocationName] = useState<string | null>(null);

  const fetchCalendarData = async () => {
    setLoading(true);
    try {
      const { events: fetchedEvents, tasks: fetchedTasks } = await fetchAllCalendarItems();
      setEvents(fetchedEvents);
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching calendar data:", error);
      toast.error("Failed to load calendar data");
      setEvents([]);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const coords = await getUserLocation();
      const weather = await fetchCurrentWeather(coords.latitude, coords.longitude);
      const location = await getLocationName(coords.latitude, coords.longitude);
      const multiDayWeather = await fetchMultiDayWeather(coords.latitude, coords.longitude);
      
      setWeatherData(weather);
      setLocationName(location);
      setMultiDayWeatherData(multiDayWeather);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Don't show error toast as it might be intrusive if user denied location permission
    }
  };

  useEffect(() => {
    fetchCalendarData();
    fetchWeatherData();
  }, []);

  const refreshCalendar = async () => {
    await fetchCalendarData();
  };

  const refreshWeather = async () => {
    await fetchWeatherData();
  };

  const updateTaskStatus = async (taskId: string, status: TaskStatus) => {
    try {
      // Update task status in the UI immediately
      const updatedTasks = tasks.map(task => 
        task.id === taskId ? { 
          ...task, 
          status, 
          completed: status === 'Complete' 
        } : task
      );
      setTasks(updatedTasks);
      toast.success(`Task marked as ${status}`);
      
      // In a real implementation, you would call an API to update the task status in the database
      console.log('Updating task status:', taskId, status);
      
      // For now, we don't need to refresh as we've updated the UI already
    } catch (error) {
      console.error('Error updating task status:', error);
      toast.error('Failed to update task');
      throw error;
    }
  };

  const updateEventRsvp = async (eventId: string, status: 'attending' | 'not_attending' | 'maybe') => {
    try {
      // In a real implementation, you would call an API to update the RSVP status
      console.log('Updating RSVP for event:', eventId, 'to', status);
      toast.success(`RSVP updated to ${status}`);
      
      // For now, we don't need to refresh as we've updated the UI already
    } catch (error) {
      console.error('Error updating RSVP:', error);
      toast.error('Failed to update RSVP');
      throw error;
    }
  };

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        events,
        tasks,
        viewType,
        setViewType,
        selectedDate,
        setSelectedDate,
        loading,
        refreshCalendar,
        updateTaskStatus,
        updateEventRsvp,
        weatherData,
        multiDayWeatherData,
        locationName,
        refreshWeather,
        getEventCategoryColor
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
