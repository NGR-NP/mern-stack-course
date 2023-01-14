import Circle from "../loading/Circle";

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
      <button
        disabled={
          !validUsername || !validEmail || !validPwd || !validMatch || isErr
            ? true
            : false
        }
        className="RLbtn"
      >
        {loading ? <Circle /> : lets}
      </button>
    </div>
  );
};

export default Button;
