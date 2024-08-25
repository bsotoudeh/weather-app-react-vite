import useCurrent from "../composable/useCurrent";
import Cloud from "./weather-elements/Cloud";
import HighLow from "./weather-elements/HighLow";
import InputSearch from "./weather-elements/InputSearch";
import Pressure from "./weather-elements/Pressure";
import TotalPrecipitation from "./weather-elements/TotalPrecipitation";
import UVIndex from "./weather-elements/UVIndex";
import WindSpeed from "./weather-elements/WindSpeed";

function Information() {
  const { dataCurrent } = useCurrent();
  return (
    <div className="flex flex-col items-center">
      <div>
        <InputSearch />
      </div>
      <div className="mt-14 ml-5 mr-7">
        <h1 className="font-black text-2xl ml-3">Today's Highlights</h1>
        <div className="mt-5 grid grid-cols-3 gap-10">
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <WindSpeed />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <Cloud />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <Pressure />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <HighLow />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <p className="text-slate-500 ml-3 ">
              UV index:{" "}
              <span className="text-l text-cyan-600 font-semibold">
                {dataCurrent?.current?.uv}
              </span>
            </p>
            <UVIndex />
          </div>
          <div className="w-60 h-28 rounded-lg shadow-lg bg-white">
            <TotalPrecipitation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
