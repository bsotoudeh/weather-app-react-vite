import { createContext, useContext } from "react";
import useCurrent from "../composable/useCurrent";
import useForecast from "../composable/useForecast";

export const weatherContextData = createContext({});

function WeatherContext({ children }) {
  const { dataCurrent } = useCurrent();
  const { dataForecast } = useForecast();
  return (
    <weatherContextData.Provider value={{ dataCurrent, dataForecast }}>
      {children}
    </weatherContextData.Provider>
  );
}

const useWeather = () => {
  const data = useContext(weatherContextData);
  return data;
};

export { useWeather };
export default WeatherContext;
