import useForecast from "../../composable/useForecast";

import { GiHeavyRain } from "react-icons/gi";

import style from "../../assets/style/sections.module.css";

function TotalPrecipitation() {
  const { dataForecast } = useForecast();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <GiHeavyRain fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Total precip</p>
          <span className="text-2xl font-semibold">
            {dataForecast?.forecast.forecastday[0].day.totalprecip_mm} Mm
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalPrecipitation;
