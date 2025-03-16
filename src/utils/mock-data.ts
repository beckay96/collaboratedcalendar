
import { addDays, addHours, setHours, startOfDay } from "date-fns";
import { CalendarEvent, CalendarTask, EventCategory, TaskStatus } from "@/types/calendar";

const today = new Date();
const startOfToday = startOfDay(today);

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Smart Frame',
    start: setHours(startOfToday, 9),
    end: setHours(startOfToday, 17),
    allDay: true,
    category: 'work',
    emoji: '🖼️'
  },
  {
    id: '2',
    title: 'ChatGPT Meeting',
    start: setHours(startOfToday, 10),
    end: setHours(startOfToday, 11),
    category: 'work',
    emoji: '🤖'
  },
  {
    id: '3',
    title: 'ClickUp Task Review',
    start: addDays(setHours(startOfToday, 14), 2),
    end: addDays(setHours(startOfToday, 15), 2),
    category: 'work',
    emoji: '📋'
  },
  {
    id: '4',
    title: 'Belong Conference',
    start: addDays(setHours(startOfToday, 9), 3),
    end: addDays(setHours(startOfToday, 16), 3),
    category: 'important',
    emoji: '🏢'
  },
  {
    id: '5',
    title: 'Casey Check-in',
    start: addDays(setHours(startOfToday, 15), 4),
    end: addDays(setHours(startOfToday, 16), 4),
    category: 'personal',
    emoji: '👥'
  },
  {
    id: '6',
    title: 'Mix and Shake Tully dance',
    start: addDays(setHours(startOfToday, 9), 5),
    end: addDays(setHours(startOfToday, 11), 5),
    category: 'personal',
    emoji: '💃'
  },
  {
    id: '7',
    title: 'Bec x Woody',
    start: addDays(setHours(startOfToday, 14), 5),
    end: addDays(setHours(startOfToday, 15), 5),
    category: 'personal',
    emoji: '🐶'
  },
  {
    id: '8',
    title: 'Perplexi Planning',
    start: addDays(setHours(startOfToday, 10), 8),
    end: addDays(setHours(startOfToday, 12), 8),
    category: 'work',
    emoji: '🧩'
  },
  {
    id: '9',
    title: "Rego's Session",
    start: addDays(setHours(startOfToday, 14), 9),
    end: addDays(setHours(startOfToday, 16), 9),
    category: 'important',
    emoji: '📝'
  }
];

export const mockTasks: CalendarTask[] = [
  {
    id: '1',
    title: 'Create a task list for woody',
    completed: false,
    status: 'To Do',
    date: addDays(today, 0),
    category: 'work',
    emoji: '📊'
  },
  {
    id: '2',
    title: 'Finish Feluga Certs',
    completed: false,
    status: 'In Progress',
    date: addDays(today, 1),
    category: 'important',
    emoji: '🔐'
  },
  {
    id: '3',
    title: 'Email back Fiona asap',
    completed: false,
    status: 'Overdue',
    date: addDays(today, 1),
    category: 'personal',
    emoji: '📧'
  }
];

export const mockWeatherData: Record<number, { temp: number, condition: string }> = {
  0: { temp: 25, condition: 'sunny' },
  1: { temp: 26, condition: 'partly-cloudy' },
  2: { temp: 31, condition: 'rainy' },
  3: { temp: 32, condition: 'partly-cloudy' },
  4: { temp: 33, condition: 'sunny' },
  5: { temp: 34, condition: 'rainy' },
  6: { temp: 35, condition: 'rainy' },
  7: { temp: 30, condition: 'rainy' },
  8: { temp: 29, condition: 'rainy' },
  9: { temp: 30, condition: 'cloudy' },
};

export function getEventCategoryColor(category: EventCategory): string {
  switch (category) {
    case 'work':
      return 'bg-event-work text-white';
    case 'personal':
      return 'bg-event-personal text-white';
    case 'important':
      return 'bg-event-important text-white';
    default:
      return 'bg-event-default text-white';
  }
}
