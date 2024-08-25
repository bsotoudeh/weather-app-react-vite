import Information from "./Information";
import ForecastData from "./weather-elements/ForecastData";
import Sidebar from "./Sidebar";

import { Wrapper, WrapperSecond } from "../assets/style/styled";

function Home() {
  return (
    <div className="flex flex-row h-screen">
      <WrapperSecond>
        <div>
          <Sidebar />
        </div>
      </WrapperSecond>
      <Wrapper>
        <div>
          <Information />
          <ForecastData />
        </div>
      </Wrapper>
    </div>
  );
}

export default Home;
