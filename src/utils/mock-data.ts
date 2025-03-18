
import { addDays, addHours, setHours, startOfDay } from "date-fns";
import { CalendarEvent, CalendarTask, EventCategory, TaskStatus } from "@/types/calendar";

const today = new Date();
const startOfToday = startOfDay(today);
