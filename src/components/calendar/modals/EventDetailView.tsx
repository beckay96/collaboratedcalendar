
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarEvent } from '@/types/calendar';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { useCalendar } from '@/context/CalendarContext';

interface EventDetailViewProps {
  event: CalendarEvent;
  onClose: () => void;
}

const EventDetailView: React.FC<EventDetailViewProps> = ({ event, onClose }) => {
  const { updateEventRsvp } = useCalendar();
  const [loading, setLoading] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<'attending' | 'not_attending' | 'maybe' | null>(null);

  const handleRsvp = async (status: 'attending' | 'not_attending' | 'maybe') => {
    if (!event.id) return;
    
    setLoading(true);
    try {
      await updateEventRsvp(event.id, status);
      setRsvpStatus(status);
    } catch (error) {
      console.error('Error updating RSVP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-4 text-sm text-muted-foreground">
        <div className="flex items-center mb-1">
          <Calendar className="w-4 h-4 mr-2" />
          {event.allDay ? (
            <span>All day: {format(event.start, 'EEEE, MMMM d, yyyy')}</span>
          ) : (
            <span>
              {format(event.start, 'EEEE, MMMM d, yyyy')} · {format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}
            </span>
          )}
        </div>
        {event.location && (
          <div className="ml-6 mt-1">Location: {event.location}</div>
        )}
      </div>

      <div className="flex gap-2 mt-4">
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
    </>
  );
};

export default EventDetailView;
