
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { CalendarEvent, CalendarTask } from '@/types/calendar';
import EventDetailView from './modals/EventDetailView';
import TaskDetailView from './modals/TaskDetailView';
import NavigationButtons from './modals/NavigationButtons';
import ItemCategoryBadge from './modals/ItemCategoryBadge';

interface ItemDetailModalProps {
  item: CalendarEvent | CalendarTask | null;
  isOpen: boolean;
  onClose: () => void;
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  isOpen,
  onClose
}) => {
  if (!item) return null;

  const isTask = 'status' in item;
  const isEvent = 'start' in item && !isTask;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            {item.emoji && <span className="mr-2">{item.emoji}</span>}
            <span className="text-xl">{item.title}</span>
          </DialogTitle>
          <ItemCategoryBadge 
            category={item.category} 
            itemType={item.itemType} 
          />
        </DialogHeader>

        {isEvent && (
          <EventDetailView 
            event={item as CalendarEvent} 
            onClose={onClose}
          />
        )}

        {isTask && (
          <TaskDetailView 
            task={item as CalendarTask} 
            onClose={onClose}
          />
        )}

        <DialogFooter className="flex sm:justify-between flex-col sm:flex-row gap-2">
          <NavigationButtons 
            itemType={item.itemType} 
            originalId={item.originalId}
            onClose={onClose}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal;
