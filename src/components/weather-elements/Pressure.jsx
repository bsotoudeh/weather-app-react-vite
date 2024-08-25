import useCurrent from "../../composable/useCurrent";

import { LuWaves } from "react-icons/lu";

import style from "../../assets/style/sections.module.css";

function Pressure() {
  const { dataCurrent } = useCurrent();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <LuWaves fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Pressure</p>
          <span className="text-2xl font-semibold">
            {dataCurrent?.current.pressure_mb} Mb
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pressure;
