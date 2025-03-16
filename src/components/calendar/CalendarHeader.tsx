
import React from 'react';
import { format, addDays, subDays } from 'date-fns';
import { CalendarIcon, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { useCalendar } from '@/context/CalendarContext';
import { getFormattedMonthYear, getNextMonth, getPreviousMonth } from '@/utils/calendar-utils';
import { toast } from 'sonner';

interface CalendarHeaderProps {
  onToggleView: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ onToggleView }) => {
  const { 
    currentDate, 
    setCurrentDate, 
    viewType, 
    selectedDate, 
    setSelectedDate,
    refreshCalendar, 
    loading 
  } = useCalendar();

  const handlePrevious = () => {
    if (viewType === 'month') {
      setCurrentDate(getPreviousMonth(currentDate));
    } else if (viewType === 'day' && selectedDate) {
      const prevDay = subDays(selectedDate, 1);
      setSelectedDate(prevDay);
    }
  };

  const handleNext = () => {
    if (viewType === 'month') {
      setCurrentDate(getNextMonth(currentDate));
    } else if (viewType === 'day' && selectedDate) {
      const nextDay = addDays(selectedDate, 1);
      setSelectedDate(nextDay);
    }
  };

  const handleRefresh = async () => {
    toast.info("Refreshing calendar data...");
    await refreshCalendar();
    toast.success("Calendar refreshed");
  };

  const displayDate = selectedDate || currentDate;
  
  return (
    <div className="flex flex-col w-full space-y-4 mb-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 rounded-full bg-primary/20 px-4 py-2 cursor-pointer transition-all hover:bg-primary/30"
          onClick={onToggleView}
        >
          <CalendarIcon className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-semibold neon-text-purple">
            {viewType === 'month' 
              ? getFormattedMonthYear(currentDate)
              : format(displayDate, 'MMMM d')}
          </h2>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleRefresh}
            disabled={loading}
            className={`p-2 rounded-full hover:bg-secondary/80 transition-colors duration-200 ${loading ? 'opacity-50' : ''}`}
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button 
            onClick={handlePrevious}
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
