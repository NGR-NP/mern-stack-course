import { useEffect, useRef, useState } from "react";
import UsernameComp from "./input/username";
import EmailComp from "./input/email";
import PasswordComp from "./input/password";
import ErrMsg from "../ErrMsg";
import Info from "../Info";
import Button from "../Button";
import CustomToast from "../../Tost/CustomToast";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const isValidUsername = /^[A-z][A-z0-9-_]{2,15}$/;
const isValidEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/auth/register";
const RegisterComp = () => {
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setValidUsername(isValidUsername.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(isValidEmail.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(isValidPwd.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameI = isValidUsername.test(username);
    const emailI = isValidEmail.test(email);
    const passwordI = isValidPwd.test(password);
    const MpasswordI = isValidPwd.test(matchPwd);
    if (!nameI || !emailI || !passwordI) {
      setErrMsg("Nice try");
      return;
    } else if (!MpasswordI) {
      setErrMsg("please comform your password, it will help you");
      return;
    }
    try {
      const res = await axios.post(REGISTER_URL, { username, email, password });
      setSuccess(true);
      setToastMessage(res?.data?.message);
      setUsername("");
      setEmail("");
      setPassword("");
      setMatchPwd("");
      setTimeout(() => {
        navigate("/login", {
          replace: true,
        });
      }, 4000);
    } catch (err) {
      console.log(err.response);
      const resp = err?.response;
      if (!resp) {
        setErrMsg("server is not responding, Reload and try again");
      } else if (resp?.data?.status === 400) {
        setErrMsg(resp.data?.message);
      } else if (resp.data.status === 409) {
        setErrMsg(resp.data.message);
      } else if (resp.data) {
        setErrMsg(resp.data.message);
      } else {
        setErrMsg("register failed! 😔");
      }
    }
  };

  return (
    <>
      {success ? (
        <CustomToast
          bgcolor={"5eda2fcf"}
          toastmessage={toastMessage || "Sucess"}
        />
      ) : (
        <></>
      )}

      {errMsg ? <ErrMsg errMsg={errMsg} errRef={errRef} /> : <></>}

      <form onSubmit={handleSubmit} className="registerForm">
        <div className="registerTitle title">Register</div>
        <Info
          message={"Alredy have an Account"}
          what={"Login"}
          where={"/login"}
        />
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
          password={password}
          setPassword={setPassword}
          validPwd={validPwd}
          pwdFocus={pwdFocus}
          setPwdFocus={setPwdFocus}
          matchPwd={matchPwd}
          setMatchPwd={setMatchPwd}
          validMatch={validMatch}
          matchFocus={matchFocus}
          setMatchFocus={setMatchFocus}
        />
        <Button
          lets={"Register"}
          validUsername={validUsername}
          validEmail={validEmail}
          validPwd={validPwd}
          validMatch={validMatch}
        />
      </form>
    </>
  );
};
export default RegisterComp;
