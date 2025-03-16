
export type EventCategory = 'default' | 'work' | 'personal' | 'important';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  category: EventCategory;
  location?: string;
  emoji?: string;
  itemType?: 'event' | 'task' | 'lesson' | 'class_plan'; // Added class_plan type
  originalId?: string; // To reference back to the original database item
}

export interface CalendarTask {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
  category: EventCategory;
  emoji?: string;
  itemType?: 'event' | 'task' | 'lesson' | 'class_plan';
  originalId?: string;
}

export interface CalendarDay {
  date: Date;
  events: CalendarEvent[];
  tasks: CalendarTask[];
  isToday: boolean;
  isCurrentMonth: boolean;
}

export interface WeatherInfo {
  temperature?: number;
  condition?: string;
  icon?: string;
}

export type CalendarViewType = 'month' | 'week' | 'day';

// Updated to match actual Supabase table structure
export interface DatabaseEvent {
  id: string;
  event_name: string;
  description?: string;
  start_date_time: string;
  end_date_time: string;
  location?: string;
  emoji?: string;
  event_type?: string;
  created_by: string;
  is_public: boolean;
}

// Updated to match actual Supabase table structure
export interface DatabaseTask {
  id: string;
  title: string;
  description?: string;
  start_time: string;
  due_date: string;
  priority_level: number;
  emoji?: string;
  assigned_to: string;
  created_by: string;
  completed: boolean;
}

// Updated to match actual Supabase table structure
export interface DatabaseLesson {
  id: string;
  title: string;
  description?: string;
  date_to_commence: string;
  date_due: string;
  complete: boolean;
  emoji?: string;
  teacher_id?: string;
  student_id?: string;
}

// Added class lesson plans interface
export interface DatabaseClassLessonPlan {
  id: string;
  title?: string;
  description?: string;
  start_time: string;
  due_date: string;
  emoji?: string;
  teacher_id?: string;
  class_id?: number;
  percentage_complete?: number;
}
