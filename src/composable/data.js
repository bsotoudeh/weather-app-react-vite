const fetchDataCurrent = (city) => {
  const KEY = "9fee32b4b3734eb287692818242308";
  const BASE_URL_CURRENT = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}`;
  return BASE_URL_CURRENT;
};

const fetchDataForecast = (city) => {
  const KEY = "9fee32b4b3734eb287692818242308";
  const BASE_URL_FORECAST = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=7&aqi=no&alerts=no`;
  return BASE_URL_FORECAST;
};

export { fetchDataCurrent, fetchDataForecast };
