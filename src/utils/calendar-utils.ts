
import { addDays, addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, getDay, isSameDay, isSameMonth, isToday, startOfMonth, startOfWeek, subMonths } from "date-fns";
import { CalendarDay, CalendarEvent, CalendarTask } from "@/types/calendar";

export function getCalendarDays(date: Date, events: CalendarEvent[], tasks: CalendarTask[]): CalendarDay[] {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days: CalendarDay[] = [];

  eachDayOfInterval({ start: startDate, end: endDate }).forEach((day) => {
    days.push({
      date: day,
      events: events.filter(event => isSameDay(event.start, day)),
      tasks: tasks.filter(task => isSameDay(task.date, day)),
      isToday: isToday(day),
      isCurrentMonth: isSameMonth(day, date),
    });
  });

  return days;
}

export function getFormattedMonthYear(date: Date): string {
  return format(date, 'MMMM yyyy');
}

export function getNextMonth(date: Date): Date {
  return addMonths(date, 1);
}

export function getPreviousMonth(date: Date): Date {
  return subMonths(date, 1);
}

export function getWeekDaysNames(): string[] {
  const weekStartDate = startOfWeek(new Date());
  return Array.from({ length: 7 }, (_, i) => {
    const day = addDays(weekStartDate, i);
    return format(day, 'EEEEE'); // Get the first letter of the day name
  });
}

export function formatEventTime(event: CalendarEvent): string {
  if (event.allDay) {
    return 'All Day';
  }
  
  return `${format(event.start, 'h:mm a')} - ${format(event.end, 'h:mm a')}`;
}

export function getDayEvents(events: CalendarEvent[], date: Date): CalendarEvent[] {
  return events.filter(event => isSameDay(event.start, date))
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}
