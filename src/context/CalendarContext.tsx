
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
  clearAllTasks: () => Promise<void>;
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
  const [initialDataLoaded, setInitialDataLoaded] = useState<boolean>(false);
  const [tasksCleared, setTasksCleared] = useState<boolean>(false);

  const fetchCalendarData = async () => {
    if (!initialDataLoaded) {
      setLoading(true);
    }
    
    try {
      console.log('Fetching calendar data...');
      const { events: fetchedEvents, tasks: fetchedTasks } = await fetchAllCalendarItems();
      console.log('Fetched tasks:', fetchedTasks);
      
      // Only set tasks if they haven't been cleared or if we're forcing a refresh
      if (!tasksCleared) {
        setEvents(fetchedEvents);
        setTasks(fetchedTasks);
      } else {
        // If tasks were cleared, only update events
        setEvents(fetchedEvents);
      }
      
      setInitialDataLoaded(true);
    } catch (error) {
      console.error("Error fetching calendar data:", error);
      toast.error("Failed to load calendar data");
      
      if (!tasksCleared) {
        setEvents([]);
        setTasks([]);
      } else {
        setEvents([]);
      }
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
    }
  };

  useEffect(() => {
    if (!initialDataLoaded) {
      fetchCalendarData();
      fetchWeatherData();
    }
  }, [initialDataLoaded]);

  const refreshCalendar = async () => {
    // Reset the tasksCleared flag when explicitly refreshing
    setTasksCleared(false);
    await fetchCalendarData();
  };

  const refreshWeather = async () => {
    await fetchWeatherData();
  };

  const updateTaskStatus = async (taskId: string, status: TaskStatus) => {
    try {
      const updatedTasks = tasks.map(task => 
        task.id === taskId ? { 
          ...task, 
          status, 
          completed: status === 'Complete' 
        } : task
      );
      setTasks(updatedTasks);
      toast.success(`Task marked as ${status}`);
      
      console.log('Updating task status:', taskId, status);
    } catch (error) {
      console.error('Error updating task status:', error);
      toast.error('Failed to update task');
      throw error;
    }
  };

  const updateEventRsvp = async (eventId: string, status: 'attending' | 'not_attending' | 'maybe') => {
    try {
      console.log('Updating RSVP for event:', eventId, 'to', status);
      toast.success(`RSVP updated to ${status}`);
    } catch (error) {
      console.error('Error updating RSVP:', error);
      toast.error('Failed to update RSVP');
      throw error;
    }
  };

  const clearAllTasks = async () => {
    try {
      console.log('Clearing all tasks...');
      setTasks([]);
      // Set the flag to prevent tasks from being reloaded
      setTasksCleared(true);
      toast.success('All tasks cleared');
    } catch (error) {
      console.error('Error clearing tasks:', error);
      toast.error('Failed to clear tasks');
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
        getEventCategoryColor,
        clearAllTasks
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
