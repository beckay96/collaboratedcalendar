
import React, { useEffect } from 'react';
import { CalendarProvider } from '@/context/CalendarContext';
import CalendarHeader from '@/components/calendar/CalendarHeader';
import CalendarGrid from '@/components/calendar/CalendarGrid';
import DayView from '@/components/calendar/DayView';
import TaskList from '@/components/calendar/TaskList';
import { useCalendar } from '@/context/CalendarContext';
import { Loader2, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const CalendarApp: React.FC = () => {
  const { viewType, setViewType, selectedDate, setSelectedDate, loading } = useCalendar();

  const toggleView = () => {
    if (viewType === 'month') {
      setSelectedDate(new Date());
      setViewType('day');
    } else {
      setViewType('month');
    }
  };

  const handleBackToMonth = () => {
    setViewType('month');
  };

  return (
    <div className="flex flex-col w-full px-4 py-6 space-y-4 max-w-full mx-auto">
      <CalendarHeader onToggleView={toggleView} />
      
      {viewType === 'month' ? (
        <CalendarGrid />
      ) : (
        <div className="w-full">
          {selectedDate && (
            <div className="w-full relative">
              <div className="absolute -top-10 right-0">
                <button
                  onClick={handleBackToMonth}
                  className="p-1 rounded-full hover:bg-secondary/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <DayView />
            </div>
          )}
        </div>
      )}
      
      <TaskList />
    </div>
  );
};

const Index = () => {
  const [searchParams] = useSearchParams();
  
  // Extract auth tokens from URL if present
  useEffect(() => {
    const authToken = searchParams.get('auth_token');
    const userId = searchParams.get('user_id');
    
    if (authToken && userId) {
      console.log('Authentication parameters detected in URL');
      // Set the session in Supabase with the provided token
      const setupAuth = async () => {
        try {
          // Store the session data
          await supabase.auth.setSession({
            access_token: authToken,
            refresh_token: ''
          });
          console.log('Auth session established for user:', userId);
        } catch (error) {
          console.error('Error setting up authentication from URL parameters:', error);
        }
      };
      
      setupAuth();
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen w-full bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/80">
      <CalendarProvider>
        <CalendarApp />
      </CalendarProvider>
    </div>
  );
};

export default Index;
