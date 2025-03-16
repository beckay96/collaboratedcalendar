
import React, { useState } from 'react';
import { CalendarProvider } from '@/context/CalendarContext';
import CalendarHeader from '@/components/calendar/CalendarHeader';
import CalendarGrid from '@/components/calendar/CalendarGrid';
import DayView from '@/components/calendar/DayView';
import TaskList from '@/components/calendar/TaskList';
import { useCalendar } from '@/context/CalendarContext';
import { X } from 'lucide-react';

const CalendarApp: React.FC = () => {
  const { viewType, setViewType, selectedDate, setSelectedDate } = useCalendar();

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
    <div className="flex flex-col w-full px-4 py-6 space-y-4 max-w-3xl mx-auto">
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
  return (
    <div className="min-h-screen w-full bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/80">
      <CalendarProvider>
        <CalendarApp />
      </CalendarProvider>
    </div>
  );
};

export default Index;
