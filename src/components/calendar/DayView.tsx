
import React, { useState } from 'react';
import { addHours, format, isSameDay, startOfDay } from 'date-fns';
import { useCalendar } from '@/context/CalendarContext';
import { getEventCategoryColor } from '@/utils/mock-data';
import { Loader2, MapPin, RefreshCcw } from 'lucide-react';
import { CalendarEvent } from '@/types/calendar';
import ItemDetailModal from './ItemDetailModal';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const DayView: React.FC = () => {
  const { 
    selectedDate, 
    events, 
    loading, 
    weatherData, 
    locationName,
    refreshWeather
  } = useCalendar();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshingWeather, setRefreshingWeather] = useState(false);
  
  if (!selectedDate) return null;
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading day view...</span>
      </div>
    );
  }
  
  const dayEvents = events.filter(event => isSameDay(event.start, selectedDate));
  const allDayEvents = dayEvents.filter(event => event.allDay);
  const timeEvents = dayEvents.filter(event => !event.allDay);
  
  // Get current time for time indicator
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const timePercentage = (currentHour + currentMinute / 60) / 24 * 100;

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };
  
  const handleRefreshWeather = async () => {
    setRefreshingWeather(true);
    await refreshWeather();
    setRefreshingWeather(false);
  };
  
  return (
    <div className="w-full h-full overflow-y-auto animate-fade-in pb-20">
      {/* Weather data display */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center text-sm">
          {weatherData && locationName ? (
            <>
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-muted-foreground">{locationName}:</span>
              <span className="ml-2 flex items-center font-medium">
                {weatherData.temp}°C
                {weatherData.condition === 'sunny' && '☀️'}
                {weatherData.condition === 'partly-cloudy' && '⛅'}
                {weatherData.condition === 'cloudy' && '☁️'}
                {weatherData.condition === 'rainy' && '🌧️'}
                {weatherData.condition === 'stormy' && '⛈️'}
                {weatherData.condition === 'snowy' && '❄️'}
              </span>
            </>
          ) : (
            <span className="text-muted-foreground">Weather data unavailable</span>
          )}
        </div>
        <button 
          onClick={handleRefreshWeather}
          className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
          disabled={refreshingWeather}
        >
          <RefreshCcw className={`h-3 w-3 mr-1 ${refreshingWeather ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>
      
      {/* All day events section */}
      {allDayEvents.length > 0 && (
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-2">All Day</div>
          {allDayEvents.map((event, index) => (
            <div 
              key={`all-day-${index}`}
              className={`mb-2 p-2 rounded-md ${getEventCategoryColor(event.category)} cursor-pointer hover:opacity-90 transition-opacity`}
              onClick={() => handleEventClick(event)}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium flex items-center">
                  {event.emoji && <span className="mr-2">{event.emoji}</span>}
                  <span>{event.title}</span>
                </h4>
                {event.itemType && (
                  <span className="text-xs bg-black/20 rounded px-1 py-0.5">
                    {event.itemType === 'class_plan' ? 'Class Plan' : event.itemType}
                  </span>
                )}
              </div>
              {event.location && <p className="text-xs opacity-90">{event.location}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Time slots */}
      <div className="relative">
        {/* Current time indicator */}
        {isSameDay(selectedDate, now) && (
          <div 
            className="absolute left-0 right-0 h-0.5 bg-red-500 z-10 pointer-events-none"
            style={{ top: `${timePercentage}%` }}
          >
            <div className="absolute -left-1 -top-1.5 w-3 h-3 rounded-full bg-red-500" />
          </div>
        )}
        
        {HOURS.map((hour) => {
          const timeSlot = addHours(startOfDay(selectedDate), hour);
          const hourEvents = timeEvents.filter(event => {
            const eventHour = event.start.getHours();
            return eventHour === hour;
          });
          
          // Special styling for current hour
          const isCurrentHour = hour === currentHour && isSameDay(selectedDate, now);
          
          return (
            <div 
              key={`hour-${hour}`} 
              className={`relative min-h-[60px] border-t border-border/30 group transition-colors
                ${isCurrentHour ? 'bg-primary/5' : 'hover:bg-secondary/30'}`}
            >
              <div className="absolute left-0 top-0 -translate-y-1/2 text-xs text-muted-foreground px-2 bg-background w-16">
                {format(timeSlot, 'h a')}
              </div>
              
              {/* Weather indicators at key times of day if it's today */}
              {isSameDay(selectedDate, now) && weatherData && (hour === 9 || hour === 12 || hour === 15 || hour === 18) && (
                <div className="absolute right-2 top-0 -translate-y-1/2 text-xs text-muted-foreground">
                  {weatherData.temp}°
                  {weatherData.condition === 'sunny' && '☀️'}
                  {weatherData.condition === 'partly-cloudy' && '⛅'}
                  {weatherData.condition === 'cloudy' && '☁️'}
                  {weatherData.condition === 'rainy' && '🌧️'}
                  {weatherData.condition === 'stormy' && '⛈️'}
                  {weatherData.condition === 'snowy' && '❄️'}
                </div>
              )}
              
              {/* Events at this hour */}
              <div className="ml-16 p-1">
                {hourEvents.map((event, index) => (
                  <div 
                    key={`event-${hour}-${index}`}
                    className={`p-2 my-1 rounded-md animate-slide-up shadow-sm cursor-pointer hover:opacity-90 transition-opacity
                      ${getEventCategoryColor(event.category)}`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      minHeight: '40px'
                    }}
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium flex items-center">
                        {event.emoji && <span className="mr-2">{event.emoji}</span>}
                        <span>{event.title}</span>
                      </h4>
                      {event.itemType && (
                        <span className="text-xs bg-black/20 rounded px-1 py-0.5 ml-1">
                          {event.itemType === 'class_plan' ? 'Class Plan' : event.itemType}
                        </span>
                      )}
                    </div>
                    <p className="text-xs">
                      {format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ItemDetailModal 
        item={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default DayView;
