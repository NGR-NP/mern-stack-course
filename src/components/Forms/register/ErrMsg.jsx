import React from "react";

const ErrMsg = ({ errRef, errMsg }) => {
  return (
    <p
      ref={errRef}
      className={errMsg ? "errmsg" : "offscreen"}
      aria-live="assertive"
    >
      {errMsg}
    </p>
  );
};

export default ErrMsg;
