import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { fetchDataCurrent } from "./useWeatherAPI";
import { useInput } from "../context/InputContext";

const fetchCurrentData = async (search) => {
  const { data } = await axios.get(fetchDataCurrent(search));
  return data;
};

function useCurrent() {
  const { search } = useInput();

  const {
    data: dataCurrent,
    error,
    isLoading,
  } = useQuery(
    ["current", search], // Unique query key, recomputes when 'search' changes
    () => fetchCurrentData(search),
    {
      enabled: !!search, // Prevents query from running if search is empty
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      retry: 1, // Retry failed requests once
      onError: () => {
        console.log("Error in forecast axios");
      },
    }
  );

  return { dataCurrent, error, isLoading };
}

export default useCurrent;
