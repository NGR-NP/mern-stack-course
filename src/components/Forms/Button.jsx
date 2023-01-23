import styled from "styled-components";
import Circle from "../loading/Circle";
const Btn = styled.button`
  cursor: ${(props) => (props.loading === "ture" ? "wait" : "")};
`;
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
        loading={loading.toString()}
        disabled={
          !validUsername ||
          !validEmail ||
          !validPwd ||
          !validMatch ||
          isErr ||
          loading
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
