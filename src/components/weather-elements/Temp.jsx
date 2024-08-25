import useCurrent from "../../composable/useCurrent";

import style from "../../assets/style/highlow.module.css";

function Temp() {
  const { dataCurrent } = useCurrent();

  return (
    <div className="flex flex-col mt-8 ml-8">
      <div>
        <img
          src={dataCurrent?.current.condition.icon}
          alt={dataCurrent?.current.condition.text}
        />
      </div>
      <div className="flex flex-row mt-2">
        <div>
          <span className="text-4xl">{dataCurrent?.current.temp_c} °C</span>
        </div>
        <div className="w-8 ml-8">
          <p>{dataCurrent?.current.condition.text}</p>
        </div>
      </div>
      <div className={style.border}></div>
    </div>
  );
}

export default Temp;
