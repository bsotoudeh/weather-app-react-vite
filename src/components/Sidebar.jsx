import ChanceOfRain from "./weather-elements/ChanceOfRain";
import InformationSun from "./weather-elements/InformationSun";
import Location from "./weather-elements/Location";
import Temp from "./weather-elements/Temp";
import { WrapperSidebar } from "../assets/style/styled";

function Sidebar() {
  return (
    <WrapperSidebar>
      <Location />
      <Temp />
      <ChanceOfRain />
      <InformationSun />
    </WrapperSidebar>
  );
}

export default Sidebar;
