import { useEffect, useRef, useState } from "react";
import "../../style/Register.css";
import { Link } from "react-router-dom";
import { Check, Dangerous, InfoOutlined } from "@mui/icons-material";

const USER_REGEX = /^[A-z][A-z0-9-_]{2,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterComp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
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
        <div className="registerInputCont inputCont bdrTop">
          <label htmlFor="userName" className="regLable">
            username:
          </label>
          <div className="inputContM">
            <div className={validName ? "valid" : "hide"}>
              <Check />
            </div>
            <div className={validName || !user ? "hide" : "invalid"}>
              <Dangerous />
            </div>
            <input
              className="registerInput"
              type="text"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter your Name"
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(false)}
              onBlur={() => setUserFocus(true)}
            />
          </div>
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "regGuide" : "offscreen"
            }
          >
            <InfoOutlined style={{ margin: "0 10px 0 0" }} />
            At list 3 characters.
          </p>
        </div>
        <div className="registerInputCont inputCont ">
          <label htmlFor="email">Email</label>
          <input
            className="registerInput"
            type="email"
            name="email"
            id="email"
            placeholder="Enter you Email"
            autoComplete="off"
          />
        </div>
        <div className="registerInputCont inputCont ">
          <label htmlFor="password">Password:</label>
          <div className="inputContM">
            <div className={validPwd ? "valid" : "hide"}>
              <Check />
            </div>
            <div className={validPwd || !pwd ? "hide" : "invalid"}>
              <Dangerous />
            </div>

            <input
              className="registerInput"
              type="password"
              name="password"
              id="password"
              placeholder="Set Password"
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
          </div>
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "regGuide" : "offscreen"}
          >
            <InfoOutlined style={{ margin: "0 10px 0 0" }} />
            At list 8 to 24 characters.
            <br />
            Must have uppercase & lowercase letters, number and a special character: ! @ #
            $ %
          </p>
        </div>
        <div className="registerInputCont inputCont bdrBottom">
          <label htmlFor="cnfpassword">Conform Password:</label>
          <div className="inputContM">
            <div className={validMatch && matchPwd ? "valid" : "hide"}>
              <Check />
            </div>
            <div className={validMatch || !matchPwd ? "hide" : "invalid"}>
              <Dangerous />
            </div>

            <input
              className="registerInput"
              type="password"
              id="cnfpassword"
              placeholder="Reinter your Password"
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="cnfnote"
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(false)}
              onBlur={() => setMatchFocus(true)}
            />
          </div>
          <p
            id="pwdnote"
            className={matchFocus && !validMatch ? "regGuide" : "offscreen"}
          >
            <InfoOutlined style={{ margin: "0 10px 0 0" }} />
            Password not match
          </p>
        </div>
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
