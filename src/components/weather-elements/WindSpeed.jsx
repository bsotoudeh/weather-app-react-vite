import useCurrent from "../../composable/useCurrent";

import { FaWind } from "react-icons/fa6";

import style from "../../assets/style/sections.module.css";

function WindSpeed() {
  const { dataCurrent } = useCurrent();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <FaWind fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Wind Speed</p>
          <span className="text-2xl font-semibold">
            {dataCurrent?.current.wind_kph} Kph
          </span>
        </div>
      </div>
    </div>
  );
}

export default WindSpeed;
