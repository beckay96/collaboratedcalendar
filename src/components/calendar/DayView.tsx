
import React from 'react';
import { addHours, format, isSameDay, startOfDay } from 'date-fns';
import { useCalendar } from '@/context/CalendarContext';
import { getEventCategoryColor, mockWeatherData } from '@/utils/mock-data';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const DayView: React.FC = () => {
  const { selectedDate, events } = useCalendar();
  
  if (!selectedDate) return null;
  
  const dayEvents = events.filter(event => isSameDay(event.start, selectedDate));
  const allDayEvents = dayEvents.filter(event => event.allDay);
  const timeEvents = dayEvents.filter(event => !event.allDay);
  const dateNumber = selectedDate.getDate();
  const weatherData = mockWeatherData[dateNumber % 10];
  
  // Get current time for time indicator
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const timePercentage = (currentHour + currentMinute / 60) / 24 * 100;
  
  return (
    <div className="w-full h-full overflow-y-auto animate-fade-in pb-20">
      {/* All day events section */}
      {allDayEvents.length > 0 && (
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-2">All Day</div>
          {allDayEvents.map((event, index) => (
            <div 
              key={`all-day-${index}`}
              className={`mb-2 p-2 rounded-md ${getEventCategoryColor(event.category)}`}
            >
              <h4 className="font-medium">{event.title}</h4>
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
              
              {/* Weather info for specific hours */}
              {(hour === 9 || hour === 12 || hour === 15 || hour === 18) && weatherData && (
                <div className="absolute right-2 top-0 -translate-y-1/2 text-xs text-muted-foreground">
                  {weatherData.temp}°
                  {weatherData.condition === 'sunny' && '☀️'}
                  {weatherData.condition === 'rainy' && '🌧️'}
                  {weatherData.condition === 'partly-cloudy' && '⛅'}
                  {weatherData.condition === 'cloudy' && '☁️'}
                </div>
              )}
              
              {/* Events at this hour */}
              <div className="ml-16 p-1">
                {hourEvents.map((event, index) => (
                  <div 
                    key={`event-${hour}-${index}`}
                    className={`p-2 my-1 rounded-md animate-slide-up shadow-sm
                      ${getEventCategoryColor(event.category)}`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      minHeight: '40px'
                    }}
                  >
                    <h4 className="font-medium">{event.title}</h4>
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
    </div>
  );
};

export default DayView;
