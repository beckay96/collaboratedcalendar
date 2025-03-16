
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CalendarEvent, CalendarTask, CalendarViewType } from '@/types/calendar';
import { fetchAllCalendarItems } from '@/services/calendarService';
import { mockEvents, mockTasks } from '@/utils/mock-data';
import { toast } from 'sonner';

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
  updateTaskStatus: (taskId: string, completed: boolean) => Promise<void>;
  updateEventRsvp: (eventId: string, status: 'attending' | 'not_attending' | 'maybe') => Promise<void>;
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

  const fetchCalendarData = async () => {
    setLoading(true);
    try {
      // Fetch real data from Supabase
      const { events: fetchedEvents, tasks: fetchedTasks } = await fetchAllCalendarItems();
      
      // If no data, use mocks for demo purposes
      setEvents(fetchedEvents.length > 0 ? fetchedEvents : mockEvents);
      setTasks(fetchedTasks.length > 0 ? fetchedTasks : mockTasks);
    } catch (error) {
      console.error("Error fetching calendar data:", error);
      toast.error("Failed to load calendar data");
      
      // Fall back to mock data on error
      setEvents(mockEvents);
      setTasks(mockTasks);
    } finally {
      setLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchCalendarData();
  }, []);

  // Function to manually refresh calendar data
  const refreshCalendar = async () => {
    await fetchCalendarData();
  };

  // Update task completion status
  const updateTaskStatus = async (taskId: string, completed: boolean) => {
    try {
      // For mock data, update local state
      if (tasks === mockTasks) {
        const updatedTasks = tasks.map(task => 
          task.id === taskId ? { ...task, completed } : task
        );
        setTasks(updatedTasks);
        toast.success(`Task ${completed ? 'completed' : 'marked as incomplete'}`);
        return;
      }

      // In a real implementation, we would call a service function here
      // that updates the task in Supabase
      console.log('Updating task status:', taskId, completed);
      
      // Refresh data after update
      await refreshCalendar();
    } catch (error) {
      console.error('Error updating task status:', error);
      toast.error('Failed to update task');
      throw error;
    }
  };

  // Update event RSVP status
  const updateEventRsvp = async (eventId: string, status: 'attending' | 'not_attending' | 'maybe') => {
    try {
      // For mock data, just log
      if (events === mockEvents) {
        console.log('Updating RSVP for event:', eventId, 'to', status);
        toast.success(`RSVP updated to ${status}`);
        return;
      }

      // In a real implementation, we would call a service function here
      // that updates the RSVP in Supabase
      console.log('Updating event RSVP:', eventId, status);
      
      // Refresh data after update
      await refreshCalendar();
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
        updateEventRsvp
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
