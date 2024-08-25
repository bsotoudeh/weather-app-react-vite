import useCurrent from "../../composable/useCurrent";
import { FaCloud } from "react-icons/fa";
import style from "../../assets/style/sections.module.css";
function Cloud() {
  const { dataCurrent } = useCurrent();

  return (
    <div className="w-full">
      <div className={style.container}>
        <div>
          <FaCloud fontSize="1.5rem" color="#5484de" />
        </div>
        <div>
          <p className="text-slate-500">Cloud</p>
          <span className="text-2xl font-semibold">
            {dataCurrent?.current.cloud}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cloud;
