
import React, { useState } from 'react';
import { format, isSameDay } from 'date-fns';
import { useCalendar } from '@/context/CalendarContext';
import { getCalendarDays, getWeekDaysNames } from '@/utils/calendar-utils';
import { Loader2, MapPin } from 'lucide-react';
import { CalendarEvent } from '@/types/calendar';
import ItemDetailModal from './ItemDetailModal';
import { WeatherData } from '@/services/weatherService';

const CalendarGrid: React.FC = () => {
  const {
    currentDate,
    events,
    tasks,
    setSelectedDate,
    setViewType,
    loading,
    weatherData,
    multiDayWeatherData,
    locationName,
    getEventCategoryColor
  } = useCalendar();
  
  const calendarDays = getCalendarDays(currentDate, events, tasks);
  const weekDays = getWeekDaysNames();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setViewType('day');
  };
  
  const handleEventClick = (event: CalendarEvent, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Function to find weather data for a specific date
  const getWeatherForDate = (date: Date): WeatherData | null => {
    if (!multiDayWeatherData || multiDayWeatherData.length === 0) return null;
    
    // Find matching weather data for this date
    const weatherForDay = multiDayWeatherData.find(weather => 
      weather.date && isSameDay(weather.date, date)
    );
    
    // If we have weather data for this day, return it
    if (weatherForDay) return weatherForDay;
    
    // If no weather data for this specific day, return null
    return null;
  };
  
  if (loading) {
    return <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading calendar...</span>
      </div>;
  }
  
  const today = new Date();
  
  return <div className="w-full animate-scale-in px-0 max-1000px">
      {weatherData && locationName && (
        <div className="mb-4 flex items-center justify-start text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{locationName}:</span>
          <span className="ml-2 flex items-center">
            {weatherData.temp}°C
            {weatherData.condition === 'sunny' && '☀️'}
            {weatherData.condition === 'partly-cloudy' && '⛅'}
            {weatherData.condition === 'cloudy' && '☁️'}
            {weatherData.condition === 'rainy' && '🌧️'}
            {weatherData.condition === 'stormy' && '⛈️'}
            {weatherData.condition === 'snowy' && '❄️'}
          </span>
        </div>
      )}
      
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day, index) => <div key={index} className="text-center font-medium text-muted-foreground">
            {day}
          </div>)}
      </div>
      
      <div className="grid grid-cols-7 gap-1 auto-rows-fr px-0">
        {calendarDays.map((day, index) => {
        const dayOfMonth = day.date.getDate();
        const hasEvents = day.events.length > 0;
        const hasTasks = day.tasks.length > 0;
        const totalItems = day.events.length + day.tasks.length;
        const itemsToShow = 2; // Max number of items to show before showing "more"
        
        // Get weather for this specific day
        const dayWeather = getWeatherForDate(day.date);
        
        // For today, use the actual weather data
        const isToday = day.isToday && day.date.getDate() === today.getDate();
        
        return <div key={index} className={`calendar-cell rounded-lg border hover:border-primary/50 cursor-pointer
                ${day.isToday ? 'border-primary' : 'border-transparent'}
                ${!day.isCurrentMonth ? 'opacity-40' : ''}
                ${day.isToday ? 'bg-primary/10' : dayOfMonth % 3 === 0 ? 'hover:bg-secondary/80' : 'hover:bg-secondary/50'}
              `} onClick={() => handleDayClick(day.date)}>
              <div className="relative w-full flex justify-between items-start">
                <span className={`calendar-day-number ${day.isToday ? 'neon-text-purple' : ''}`}>
                  {format(day.date, 'd')}
                </span>
                
                {/* Weather icon for this day if available */}
                {dayWeather && (
                  <span className="text-xs rounded-full flex items-center justify-center text-muted-foreground">
                    {dayWeather.temp}°
                    {dayWeather.condition === 'sunny' && '☀️'}
                    {dayWeather.condition === 'partly-cloudy' && '⛅'}
                    {dayWeather.condition === 'cloudy' && '☁️'}
                    {dayWeather.condition === 'rainy' && '🌧️'}
                    {dayWeather.condition === 'stormy' && '⛈️'}
                    {dayWeather.condition === 'snowy' && '❄️'}
                  </span>
                )}
              </div>
              
              {/* Event indicators with item type badges */}
              <div className="mt-auto w-full">
                {day.events.slice(0, itemsToShow).map((event, eventIndex) => <div key={`event-${eventIndex}`} className={`event-tag text-[9px] flex items-center justify-between ${getEventCategoryColor(event.category)}`} onClick={e => handleEventClick(event, e)}>
                    <div className="flex items-center overflow-hidden">
                      {event.emoji && <span className="mr-0.5 flex-shrink-0">{event.emoji}</span>}
                      <span className="truncate">{event.title}</span>
                    </div>
                    {event.itemType && <span className="text-[7px] bg-black/20 rounded px-1 ml-1 flex-shrink-0">
                        {event.itemType === 'class_plan' ? 'C' : event.itemType.charAt(0).toUpperCase()}
                      </span>}
                  </div>)}
                
                {/* Show remaining count if there are more events - only if totalItems > itemsToShow */}
                {totalItems > itemsToShow && (
                  <div className="text-[9px] text-center text-muted-foreground">
                    +{totalItems - itemsToShow} more
                  </div>
                )}
              </div>
            </div>;
      })}
      </div>

      <ItemDetailModal item={selectedEvent} isOpen={isModalOpen} onClose={closeModal} />
    </div>;
};

export default CalendarGrid;
