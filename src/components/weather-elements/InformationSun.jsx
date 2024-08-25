import useForecast from "../../composable/useForecast";

import { TbSunset2 } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";

import { WrapperSun } from "../../assets/style/styled";

function InformationSun() {
  const { dataForecast } = useForecast();

  return (
    <div>
      <p className="ml-8 text-lg mt-6">Sunrise & Sunset</p>
      <div>
        <WrapperSun>
          <div className="flex flex-row ml-8">
            <div className="mr-5 mt-3">
              <IoSunnyOutline fontSize="1.8rem" color="#fff" />
            </div>
            <div>
              <p>sunrise</p>
              <span>{dataForecast?.forecast.forecastday[0].astro.sunrise}</span>
            </div>
          </div>
        </WrapperSun>
        <WrapperSun>
          <div>
            <div className="flex flex-row ml-8">
              <div className="mr-5 mt-3">
                <TbSunset2 fontSize="1.8rem" color="#fff" />
              </div>
              <div>
                <p>sunset</p>
                <span>
                  {dataForecast?.forecast.forecastday[0].astro.sunset}
                </span>
              </div>
            </div>
          </div>
        </WrapperSun>
      </div>
    </div>
  );
}

export default InformationSun;
