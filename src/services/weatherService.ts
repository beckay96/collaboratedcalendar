
import { toast } from 'sonner';

export type WeatherCondition = 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy' | 'stormy' | 'snowy';

export interface WeatherData {
  temp: number;
  condition: WeatherCondition;
  location?: string;
}

interface GeoLocationCoords {
  latitude: number;
  longitude: number;
}

// Function to get user's current location
export const getUserLocation = (): Promise<GeoLocationCoords> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      reject(new Error('Geolocation not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        console.error('Error getting location:', error);
        toast.error('Unable to access your location');
        reject(error);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  });
};

// Map WMO weather codes to our simplified conditions
// Based on Open-Meteo codes: https://open-meteo.com/en/docs
const mapWeatherCode = (code: number): WeatherCondition => {
  // Clear
  if (code === 0 || code === 1) return 'sunny';
  // Partly cloudy
  if (code === 2 || code === 3) return 'partly-cloudy';
  // Foggy or cloudy
  if (code >= 45 && code <= 49) return 'cloudy';
  // Drizzle or rain
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rainy';
  // Snow
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return 'snowy';
  // Thunderstorm
  if (code >= 95 && code <= 99) return 'stormy';
  
  // Default
  return 'partly-cloudy';
};

// Fetch current weather from Open-Meteo API
export const fetchCurrentWeather = async (latitude: number, longitude: number): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=celsius`
    );

    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }

    const data = await response.json();
    
    return {
      temp: Math.round(data.current.temperature_2m),
      condition: mapWeatherCode(data.current.weather_code),
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    toast.error('Unable to fetch weather data');
    // Return a default weather object
    return {
      temp: 22,
      condition: 'partly-cloudy',
    };
  }
};

// Get location name from coordinates using reverse geocoding
export const getLocationName = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/geocoding?latitude=${latitude}&longitude=${longitude}&format=json`
    );
    
    if (!response.ok) {
      throw new Error('Geocoding request failed');
    }
    
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].name;
    }
    
    return 'Unknown location';
  } catch (error) {
    console.error('Error getting location name:', error);
    return 'Unknown location';
  }
};
