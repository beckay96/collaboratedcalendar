
import { EventCategory } from '@/types/calendar';

export function getEventCategoryColor(category: EventCategory | string): string {
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
