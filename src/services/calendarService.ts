
import { supabase } from '@/integrations/supabase/client';
import { 
  CalendarEvent, 
  CalendarTask, 
  DatabaseEvent, 
  DatabaseTask, 
  DatabaseLesson,
  EventCategory
} from '@/types/calendar';

// Helper function to determine event category based on type/priority
const determineCategoryFromPriority = (priority: number): EventCategory => {
  if (priority >= 3) return 'important';
  if (priority === 2) return 'work';
  return 'default';
};

// Convert database events to our calendar format
export const fetchEvents = async (): Promise<CalendarEvent[]> => {
  try {
    const { data: events, error } = await supabase
      .from('events')
      .select('*');

    if (error) {
      console.error('Error fetching events:', error);
      return [];
    }

    return (events as DatabaseEvent[]).map(event => ({
      id: `event-${event.id}`,
      title: event.event_name,
      start: new Date(event.start_date_time),
      end: new Date(event.end_date_time),
      allDay: false, // Could determine this by comparing start and end times
      category: 'default',
      location: event.location,
      itemType: 'event',
      originalId: event.id
    }));
  } catch (error) {
    console.error('Error in fetchEvents:', error);
    return [];
  }
};

// Convert database tasks to our calendar format
export const fetchTasks = async (): Promise<{ events: CalendarEvent[], tasks: CalendarTask[] }> => {
  try {
    const { data: tasks, error } = await supabase
      .from('tasks')
      .select('*');

    if (error) {
      console.error('Error fetching tasks:', error);
      return { events: [], tasks: [] };
    }

    const calendarEvents: CalendarEvent[] = [];
    const calendarTasks: CalendarTask[] = [];

    (tasks as DatabaseTask[]).forEach(task => {
      const category = determineCategoryFromPriority(task.priority_level);
      
      // Add as event if it has start and due dates
      if (task.start_time && task.due_date) {
        calendarEvents.push({
          id: `task-event-${task.id}`,
          title: task.title,
          start: new Date(task.start_time),
          end: new Date(task.due_date),
          category,
          itemType: 'task',
          originalId: task.id
        });
      }
      
      // Always add as task
      calendarTasks.push({
        id: `task-${task.id}`,
        title: task.title,
        completed: task.completed || false,
        date: task.due_date ? new Date(task.due_date) : new Date(),
        category,
        itemType: 'task',
        originalId: task.id
      });
    });

    return { events: calendarEvents, tasks: calendarTasks };
  } catch (error) {
    console.error('Error in fetchTasks:', error);
    return { events: [], tasks: [] };
  }
};

// Convert database lessons to our calendar format
export const fetchLessons = async (): Promise<CalendarEvent[]> => {
  try {
    const { data: lessons, error } = await supabase
      .from('lessons')
      .select('*');

    if (error) {
      console.error('Error fetching lessons:', error);
      return [];
    }

    return (lessons as DatabaseLesson[]).map(lesson => ({
      id: `lesson-${lesson.id}`,
      title: lesson.title,
      start: new Date(lesson.date_to_commence),
      end: new Date(lesson.date_due),
      allDay: true, // Lessons are typically day-based
      category: 'work',
      itemType: 'lesson',
      originalId: lesson.id
    }));
  } catch (error) {
    console.error('Error in fetchLessons:', error);
    return [];
  }
};

// Fetch all calendar items
export const fetchAllCalendarItems = async (): Promise<{ 
  events: CalendarEvent[],
  tasks: CalendarTask[]
}> => {
  try {
    const events = await fetchEvents();
    const { events: taskEvents, tasks } = await fetchTasks();
    const lessons = await fetchLessons();

    return {
      events: [...events, ...taskEvents, ...lessons],
      tasks
    };
  } catch (error) {
    console.error('Error fetching all calendar items:', error);
    return { events: [], tasks: [] };
  }
};
