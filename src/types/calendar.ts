
export type EventCategory = 'default' | 'work' | 'personal' | 'important';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  category: EventCategory;
  location?: string;
  itemType?: 'event' | 'task' | 'lesson'; // For differentiating between different types
  originalId?: string; // To reference back to the original database item
}

export interface CalendarTask {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
  category: EventCategory;
  itemType?: 'event' | 'task' | 'lesson';
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

export interface DatabaseEvent {
  id: string;
  event_name: string;
  description?: string;
  start_date_time: string;
  end_date_time: string;
  location?: string;
  created_by: string;
  is_public: boolean;
}

export interface DatabaseTask {
  id: string;
  title: string;
  description?: string;
  start_time: string;
  due_date: string;
  priority_level: number;
  assigned_to: string;
  created_by: string;
  completed: boolean;
}

export interface DatabaseLesson {
  id: string;
  title: string;
  description?: string;
  date_to_commence: string;
  date_due: string;
  complete: boolean;
  teacher_id: string;
  student_id: string;
}
