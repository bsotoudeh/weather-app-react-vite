const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;

const fetchDataCurrent = (city) => {
  const BASE_URL_CURRENT = `${WEATHER_API_BASE_URL}current.json?key=${WEATHER_API_KEY}&q=${city}`;
  return BASE_URL_CURRENT;
};

const fetchDataForecast = (city) => {
  const BASE_URL_FORECAST = `${WEATHER_API_BASE_URL}forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
  return BASE_URL_FORECAST;
};

export { fetchDataCurrent, fetchDataForecast };
