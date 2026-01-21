// Toronto coordinates
const TORONTO_LAT = 43.6532;
const TORONTO_LNG = -79.3832;

// Simplified sunrise/sunset calculation for Toronto
// This uses an approximation formula that's accurate enough for theme switching
function calculateSunTimes(date: Date) {
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Approximate solar declination
  const declination = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * Math.PI / 180);
  
  // Hour angle at sunrise/sunset
  const latRad = TORONTO_LAT * Math.PI / 180;
  const declRad = declination * Math.PI / 180;
  
  const hourAngle = Math.acos(-Math.tan(latRad) * Math.tan(declRad)) * 180 / Math.PI;
  
  // Solar noon is approximately at 12:00 + longitude offset
  const solarNoon = 12 - (TORONTO_LNG / 15);
  
  // Sunrise and sunset times (in hours)
  const sunriseHour = solarNoon - (hourAngle / 15);
  const sunsetHour = solarNoon + (hourAngle / 15);
  
  // Convert to Date objects
  const sunrise = new Date(date);
  sunrise.setHours(Math.floor(sunriseHour), Math.round((sunriseHour % 1) * 60), 0, 0);
  
  const sunset = new Date(date);
  sunset.setHours(Math.floor(sunsetHour), Math.round((sunsetHour % 1) * 60), 0, 0);
  
  return { sunrise, sunset };
}

export function isDaytime(): boolean {
  const now = new Date();
  const { sunrise, sunset } = calculateSunTimes(now);
  
  // Check if current time is between sunrise and sunset
  return now >= sunrise && now <= sunset;
}

export function getSunTimes() {
  const now = new Date();
  const { sunrise, sunset } = calculateSunTimes(now);
  
  return {
    sunrise,
    sunset,
    isDaytime: isDaytime()
  };
}
