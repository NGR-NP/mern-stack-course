import { useEffect, useRef, useState } from "react";
import "../../../style/Register.css";
import UsernameComp from "../input/username";
import EmailComp from "../input/email";
import PasswordComp from "../input/password";
import ErrMsg from "./ErrMsg";
import Info from "../Info";

const isValidUsername = /^[A-z][A-z0-9-_]{2,15}$/;
const isValidEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterComp = () => {
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    setValidUsername(isValidUsername.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(isValidEmail.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(isValidPwd.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [username]);

  return (
    <>
      <ErrMsg errMsg={errMsg} errRef={errRef} />
      <form className="registerForm">
        <div className="registerTitle title">Register</div>
        <UsernameComp
          username={username}
          validUsername={validUsername}
          setUsername={setUsername}
          usernameFocus={usernameFocus}
          setUsernameFocus={setUsernameFocus}
        />
        <EmailComp
          email={email}
          setEmail={setEmail}
          validEmail={validEmail}
          emailFocus={emailFocus}
          setEmailFocus={setEmailFocus}
        />
        <PasswordComp
          pwd={pwd}
          setPwd={setPwd}
          validPwd={validPwd}
          pwdFocus={pwdFocus}
          setPwdFocus={setPwdFocus}
          matchPwd={matchPwd}
          setMatchPwd={setMatchPwd}
          validMatch={validMatch}
          matchFocus={matchFocus}
          setMatchFocus={setMatchFocus}
        />
        <div className="centerADiv">
          <button
            disabled={
              !validUsername || !validEmail || !validPwd || !validMatch
                ? true
                : false
            }
            className="registerBtn"
          >
            Submit
          </button>
        </div>
        <Info message={"Alredy have an Account"} where={"login"} />
      </form>
    </>
  );
};

export default RegisterComp;
