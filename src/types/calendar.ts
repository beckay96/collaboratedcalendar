
export type EventCategory = 'default' | 'work' | 'personal' | 'important';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  category: EventCategory;
  location?: string;
}

export interface CalendarTask {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
  category: EventCategory;
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
