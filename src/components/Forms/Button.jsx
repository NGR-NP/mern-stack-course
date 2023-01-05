import React from "react";

const Button = ({ validEmail, validMatch, validPwd, validUsername,lets }) => {
  return (
    <div className="centerADiv">
      <button
        disabled={
          !validUsername || !validEmail || !validPwd || !validMatch
            ? true
            : false
        }
        className="RLbtn"
      >
        {lets}
      </button>
    </div>
  );
};

export default Button;
