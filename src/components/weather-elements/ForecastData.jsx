import useForecast from "../../composable/useForecast";

import moment from "moment";

function ForecastData() {
  const { dataForecast } = useForecast();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-black text-2xl ml-12 mt-14">7-day forecast</h1>
      <div className="flex">
        {dataForecast?.forecast.forecastday.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-slate-200 mt-14 ml-12 mb-12 w-28 rounded-md drop-shadow-lg shadow-lg"
          >
            <div>
              <p className="text-xl mt-2 text-cyan-700">
                {moment(f.date).format("ddd")}
              </p>
            </div>
            <div className="mb-2">
              <img src={f.day.condition.icon} alt={f.day.condition.text} />
            </div>
            <div className="flex">
              <div>
                <p className="mr-2 text-neutral-700">{f.day.maxtemp_c}°</p>
              </div>
              <div>
                <p className="text-neutral-400">{f.day.mintemp_c}°</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastData;
