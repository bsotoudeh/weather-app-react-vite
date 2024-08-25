import { Percent, ProgressStyled } from "../assets/style/styled";

function Progress({ data }) {
  return (
    <>
      <ProgressStyled>
        <Percent $data={data}></Percent>
      </ProgressStyled>
    </>
  );
}

export default Progress;
