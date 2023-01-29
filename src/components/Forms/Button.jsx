import styled from "styled-components";
import Circle from "../loading/Circle";
const Btn = styled.button``;
const Button = ({
  isErr,
  loading,
  validEmail,
  validMatch,
  validPwd,
  validUsername,
  lets,
}) => {
  return (
    <div className="centerADiv">
      <Btn
        disabled={
          !validUsername ||
          !validEmail ||
          !validPwd ||
          !validMatch ||
          loading ||
          isErr
            ? true
            : false
        }
        className="RLbtn"
      >
        {loading ? <Circle top={"19%"} right={"45%"} /> : lets}
      </Btn>
    </div>
  );
};

export default Button;
