import { useEffect, useState } from "react";
import { Check, Dangerous, InfoOutlined } from "@mui/icons-material";

const isValidUsername = /^[A-z][A-z0-9-_]{2,15}$/;

const UsernameComp = () => {

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);


  useEffect(() => {
    setValidUsername(isValidUsername.test(username));
  }, [username]);

  return (
    <div
      usernameProps={username}
      className="registerInputCont inputCont bdrTop"
    >
      <label htmlFor="userName" className="regLable">
        username
      </label>
      <div className="inputContM">
        <div className={validUsername ? "valid" : "hide"}>
          <Check />
        </div>
        <div className={validUsername || !username ? "hide" : "invalid"}>
          <Dangerous />
        </div>
        <input
          className="registerInput"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
          required
          aria-invalid={validUsername ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUsernameFocus(false)}
          onBlur={() => setUsernameFocus(true)}
        />
      </div>
      <p
        id="uidnote"
        className={
          usernameFocus && username && !validUsername ? "regGuide" : "offscreen"
        }
      >
        <InfoOutlined style={{ margin: "0 10px 0 0" }} />
        At list 3 characters. Must start with Letter
      </p>
    </div>
  );
};

export default UsernameComp;
