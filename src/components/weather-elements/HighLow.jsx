import useForecast from "../../composable/useForecast";

import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";

import style from "../../assets/style/highlow.module.css";

function HighLow() {
  const { dataForecast } = useForecast();
  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <div>
            <FaTemperatureArrowUp fontSize="1.5rem" color="#5484de" />
          </div>
          <div>
            <FaTemperatureArrowDown fontSize="1.5rem" color="#5484de" />
          </div>
        </div>
        <div>
          <div>
            <p className="text-slate-500">Max temp</p>
            <span className="text-xl font-semibold">
              {dataForecast?.forecast.forecastday[0].day.maxtemp_c} °C
            </span>
          </div>
          <div>
            <p className="text-slate-500">Min temp</p>
            <span className="text-xl font-semibold">
              {dataForecast?.forecast.forecastday[0].day.mintemp_c} °C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighLow;
