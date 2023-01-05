import React, { useEffect, useState } from "react";
import { Check, Dangerous, InfoOutlined } from "@mui/icons-material";

const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const PasswordComp = () => {
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    setValidPwd(isValidPwd.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  return (
    <>
      <div usernameProps={pwd} className="registerInputCont inputCont ">
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
            onFocus={() => setPwdFocus(false)}
            onBlur={() => setPwdFocus(true)}
          />
        </div>
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "regGuide" : "offscreen"}
        >
          <InfoOutlined style={{ margin: "0 10px 0 0" }} />
          At list 8 to 24 characters.
          <br />
          Must have uppercase & lowercase letters, number and a special
          character: ! @ # $ %
        </p>
      </div>
      <div
        usernameProps={matchPwd}
        className="registerInputCont inputCont bdrBottom"
      >
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
    </>
  );
};

export default PasswordComp;
