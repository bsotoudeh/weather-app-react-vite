import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { fetchDataForecast } from "./data";
import { useInput } from "../context/InputContext";

const fetchForecastData = async (search) => {
  const { data } = await axios.get(fetchDataForecast(search));
  return data;
};

function useForecast() {
  const { search } = useInput();

  const {
    data: dataForecast,
    error,
    isLoading,
  } = useQuery(
    ["forecast", search], // Unique query key, recomputes when 'search' changes
    () => fetchForecastData(search),
    {
      enabled: !!search, // Prevents query from running if search is empty
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      retry: 1, // Retry failed requests once
      onError: () => {
        console.log("Error in forecast axios");
      },
    }
  );

  return { dataForecast, error, isLoading };
}

export default useForecast;
