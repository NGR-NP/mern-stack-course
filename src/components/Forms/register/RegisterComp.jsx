import { useEffect, useRef, useState } from "react";
import "../../../style/Register.css";
import { Link } from "react-router-dom";
import UsernameComp from "../input/username";
import EmailComp from "../input/email";
import PasswordComp from "../input/password";

const RegisterComp = ({ username, email, pwd, matchPwd }) => {
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [username, email, pwd, matchPwd]);

  return (
    <>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form className="registerMain">
        <div className="registerTitle title">Register</div>
        <UsernameComp />
        <EmailComp />
        <PasswordComp />
        <div className="centerADiv">
          <button className="registerBtn">Submit</button>
        </div>
        <div className="infoCont">
          <p>Already have an Account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </>
  );
};

export default RegisterComp;
