import styled from "styled-components";
import { formatAsPercent } from "../../helper/percentageHelper";

export const WrapperFont = styled.section`
  font-family: Lato;
`;

export const WrapperSearch = styled.section`
  padding: 8px;
  color: #000;
  margin-left: 15px;
  border-bottom: 1px solid #000;
`;

export const WrapperSun = styled.section`
  width: 175px;
  padding: 10px 5px;
  background-color: rgba(17, 45, 91, 0.4);
  border-radius: 7px;
  margin-left: 35px;
  margin-top: 7px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const WrapperSidebar = styled.section`
  background: rgb(22, 88, 176);
  background: linear-gradient(
    90deg,
    rgba(22, 88, 176, 1) 0%,
    rgba(52, 78, 121, 1) 70%,
    rgba(33, 58, 105, 1) 100%
  );
  color: white;
  height: 100vh;
`;

export const Percent = styled.section<{ $data?: number | undefined }>`
  background-color: rgba(139, 177, 253, 255);
  width: ${(props) => (props.$data ? formatAsPercent(props.$data) : "0px")};
  padding: 0;
  border-radius: 15px;
  height: 20px;
  transition: all 1s ease-out;
  transition-delay: 1s;
`;

export const Wrapper = styled.section`
  background-color: rgba(246, 246, 248, 255);
  height: 100%;
  width: 80%;
`;

export const WrapperSecond = styled.section`
  height: 100%;
  width: 20%;
`;

export const ProgressStyled = styled.section`
  margin: 0;
  padding: 0;
  background-color: rgba(43, 66, 102, 255);
  width: 140px;
  border: 2px rgba(43, 66, 102, 255) solid;
  border-radius: 15px;
`;
