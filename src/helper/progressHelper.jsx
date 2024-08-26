import { Percent, ProgressStyled } from "../assets/style/styled";

function ProgressIndicator({ data }) {
  return (
    <>
      <ProgressStyled>
        <Percent $data={data}></Percent>
      </ProgressStyled>
    </>
  );
}

export default ProgressIndicator;
