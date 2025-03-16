
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CalendarEvent, CalendarTask, TaskStatus } from '@/types/calendar';
import { format } from 'date-fns';
import { CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { getEventCategoryColor } from '@/utils/mock-data';
import { useCalendar } from '@/context/CalendarContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { updateTaskStatus, updateEventRsvp } = useCalendar();
  const [loading, setLoading] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<'attending' | 'not_attending' | 'maybe' | null>(null);

  if (!item) return null;

  const isTask = 'status' in item || 'completed' in item;
  const isEvent = 'start' in item && !isTask;

  const markTaskComplete = async () => {
    if (!isTask || !item.id) return;
    
    setLoading(true);
    try {
      await updateTaskStatus(item.id, 'Complete');
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const updateTaskToStatus = async (status: TaskStatus) => {
    if (!isTask || !item.id) return;
    
    setLoading(true);
    try {
      await updateTaskStatus(item.id, status);
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRsvp = async (status: 'attending' | 'not_attending' | 'maybe') => {
    if (!isEvent || !item.id) return;
    
    setLoading(true);
    try {
      await updateEventRsvp(item.id, status);
      setRsvpStatus(status);
    } catch (error) {
      console.error('Error updating RSVP:', error);
    } finally {
      setLoading(false);
    }
  };

  const navigateToAssistant = () => {
    if (item.itemType === 'lesson') {
      console.log('Navigating to Assignment Assistant for lesson:', item.originalId);
      navigate(`/assignment-assistant/${item.originalId}`);
      onClose();
    }
  };

  const navigateToClassCompass = () => {
    if (item.itemType === 'class_plan') {
      console.log('Navigating to Class Compass for class plan:', item.originalId);
      navigate(`/class-compass/${item.originalId}`);
      onClose();
    }
  };

  const renderDateInfo = () => {
    if (!isEvent) return null;
    
    return (
      <div className="mt-4 text-sm text-muted-foreground">
        <div className="flex items-center mb-1">
          <Calendar className="w-4 h-4 mr-2" />
          {item.allDay ? (
            <span>All day: {format(item.start, 'EEEE, MMMM d, yyyy')}</span>
          ) : (
            <span>
              {format(item.start, 'EEEE, MMMM d, yyyy')} · {format(item.start, 'h:mm a')} - {format(item.end, 'h:mm a')}
            </span>
          )}
        </div>
        {item.location && (
          <div className="ml-6 mt-1">Location: {item.location}</div>
        )}
      </div>
    );
  };

  // Determine current task status
  const taskStatus = isTask && 'status' in item ? item.status : 
                    isTask && (item as CalendarTask).completed ? 'Complete' : 'To Do';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            {item.emoji && <span className="mr-2">{item.emoji}</span>}
            <span className="text-xl">{isTask ? item.title : ('title' in item ? item.title : '')}</span>
          </DialogTitle>
          <div className="mt-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${getEventCategoryColor(item.category)}`}>
              {item.category}
            </span>
            {item.itemType && (
              <span className="text-xs bg-secondary/80 rounded px-1 py-0.5 ml-2">
                {item.itemType === 'class_plan' ? 'Class Plan' : item.itemType}
              </span>
            )}
          </div>
        </DialogHeader>

        {renderDateInfo()}

        <div className="space-y-4">
          {isTask && (
            <div className="flex items-center">
              <span className="text-sm mr-2">Status:</span>
              <span className={`text-sm px-2 py-0.5 rounded-full ${
                taskStatus === 'Complete' ? 'bg-green-500/80 text-white' :
                taskStatus === 'In Progress' ? 'bg-blue-500/80 text-white' :
                taskStatus === 'Overdue' ? 'bg-red-500/80 text-white' :
                'bg-gray-500/80 text-white'
              }`}>
                {taskStatus}
              </span>
            </div>
          )}
        </div>

        <DialogFooter className="flex sm:justify-between flex-col sm:flex-row gap-2">
          <div className="flex flex-wrap gap-2">
            {isTask && (
              <>
                {taskStatus !== 'Complete' && (
                  <Button 
                    onClick={markTaskComplete}
                    disabled={loading}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark Complete
                  </Button>
                )}
                
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  <Button 
                    onClick={() => updateTaskToStatus('To Do')}
                    disabled={loading || taskStatus === 'To Do'}
                    variant={taskStatus === 'To Do' ? 'default' : 'outline'}
                    size="sm"
                  >
                    To Do
                  </Button>
                  <Button 
                    onClick={() => updateTaskToStatus('In Progress')}
                    disabled={loading || taskStatus === 'In Progress'}
                    variant={taskStatus === 'In Progress' ? 'default' : 'outline'}
                    size="sm"
                    className={taskStatus === 'In Progress' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                  >
                    In Progress
                  </Button>
                  <Button 
                    onClick={() => updateTaskToStatus('Overdue')}
                    disabled={loading || taskStatus === 'Overdue'}
                    variant={taskStatus === 'Overdue' ? 'default' : 'outline'}
                    size="sm"
                    className={taskStatus === 'Overdue' ? 'bg-red-600 hover:bg-red-700' : ''}
                  >
                    Overdue
                  </Button>
                </div>
              </>
            )}
            
            {item.itemType === 'lesson' && (
              <Button onClick={navigateToAssistant} variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Go to Assignment Assistant
              </Button>
            )}
            
            {item.itemType === 'class_plan' && (
              <Button onClick={navigateToClassCompass} variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Go to Class Compass
              </Button>
            )}
          </div>
          
          {isEvent && (
            <div className="flex gap-2">
              <Button 
                onClick={() => handleRsvp('attending')}
                disabled={loading || rsvpStatus === 'attending'}
                variant={rsvpStatus === 'attending' ? 'default' : 'outline'}
                className={rsvpStatus === 'attending' ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                Going
              </Button>
              <Button 
                onClick={() => handleRsvp('maybe')}
                disabled={loading || rsvpStatus === 'maybe'}
                variant={rsvpStatus === 'maybe' ? 'default' : 'outline'}
                className={rsvpStatus === 'maybe' ? 'bg-amber-600 hover:bg-amber-700' : ''}
              >
                Maybe
              </Button>
              <Button 
                onClick={() => handleRsvp('not_attending')}
                disabled={loading || rsvpStatus === 'not_attending'}
                variant={rsvpStatus === 'not_attending' ? 'default' : 'outline'}
                className={rsvpStatus === 'not_attending' ? 'bg-red-600 hover:bg-red-700' : ''}
              >
                Not Going
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDetailModal;
