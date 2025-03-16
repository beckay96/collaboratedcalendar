
import { supabase } from '@/integrations/supabase/client';
import { 
  CalendarEvent, 
  CalendarTask, 
  DatabaseEvent, 
  DatabaseTask, 
  DatabaseLesson,
  DatabaseClassLessonPlan,
  EventCategory,
  TaskStatus
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

    // Cast to unknown first to handle type mismatch
    return ((events as unknown) as DatabaseEvent[]).map(event => ({
      id: `event-${event.id}`,
      title: event.event_name,
      start: new Date(event.start_date_time),
      end: new Date(event.end_date_time),
      allDay: false, // Could determine this by comparing start and end times
      category: 'default',
      location: event.location,
      emoji: event.emoji,
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

    // Cast to unknown first to handle type mismatch
    ((tasks as unknown) as DatabaseTask[]).forEach(task => {
      const category = determineCategoryFromPriority(task.priority_level);
      const uniqueId = task.id || `task-${Math.random().toString(36).substring(2, 9)}`;
      
      // Map status to the correct TaskStatus type or default to 'To Do'
      const status: TaskStatus = (task.status as TaskStatus) || 'To Do';
      
      // Add as event if it has start and due dates
      if (task.start_time && task.due_date) {
        calendarEvents.push({
          id: `task-event-${uniqueId}`,
          title: task.title,
          start: new Date(task.start_time),
          end: new Date(task.due_date),
          category,
          emoji: task.emoji,
          itemType: 'task',
          originalId: task.id
        });
      }
      
      // Always add as task
      calendarTasks.push({
        id: `task-${uniqueId}`,
        title: task.title,
        completed: status === 'Complete', // Map status to completed flag
        status, // Add the status field
        date: task.due_date ? new Date(task.due_date) : new Date(),
        category,
        emoji: task.emoji,
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

    // Cast to unknown first to handle type mismatch
    return ((lessons as unknown) as DatabaseLesson[]).map(lesson => ({
      id: `lesson-${lesson.id}`,
      title: lesson.title || 'Untitled Lesson',
      start: new Date(lesson.date_to_commence),
      end: new Date(lesson.date_due),
      allDay: true, // Lessons are typically day-based
      category: 'work',
      emoji: lesson.emoji,
      itemType: 'lesson',
      originalId: lesson.id
    }));
  } catch (error) {
    console.error('Error in fetchLessons:', error);
    return [];
  }
};

// Fetch class lesson plans (for teachers)
export const fetchClassLessonPlans = async (): Promise<CalendarEvent[]> => {
  try {
    const { data: lessonPlans, error } = await supabase
      .from('class_lesson_plans')
      .select('*');

    if (error) {
      console.error('Error fetching class lesson plans:', error);
      return [];
    }

    // Cast to unknown first to handle type mismatch
    return ((lessonPlans as unknown) as DatabaseClassLessonPlan[]).map(plan => ({
      id: `class-plan-${plan.id}`,
      title: plan.title || 'Class Plan',
      start: new Date(plan.start_time),
      end: new Date(plan.due_date),
      allDay: false,
      category: 'work',
      emoji: plan.emoji,
      itemType: 'class_plan',
      originalId: plan.id
    }));
  } catch (error) {
    console.error('Error in fetchClassLessonPlans:', error);
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
    const classLessonPlans = await fetchClassLessonPlans();

    return {
      events: [...events, ...taskEvents, ...lessons, ...classLessonPlans],
      tasks
    };
  } catch (error) {
    console.error('Error fetching all calendar items:', error);
    return { events: [], tasks: [] };
  }
};
