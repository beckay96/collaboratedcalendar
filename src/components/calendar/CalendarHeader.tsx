
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendar } from '@/context/CalendarContext';
import { getFormattedMonthYear, getNextMonth, getPreviousMonth } from '@/utils/calendar-utils';

interface CalendarHeaderProps {
  onToggleView: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ onToggleView }) => {
  const { currentDate, setCurrentDate, viewType, selectedDate } = useCalendar();

  const handlePrevious = () => {
    setCurrentDate(getPreviousMonth(currentDate));
  };

  const handleNext = () => {
    setCurrentDate(getNextMonth(currentDate));
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
