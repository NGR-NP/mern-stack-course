import { useEffect, useState } from "react";
import { Check, Dangerous, InfoOutlined } from "@mui/icons-material";
const isValidEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const EmailComp = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  useEffect(() => {
    setValidEmail(isValidEmail.test(email));
  }, [email]);

  return (
    <div usernameProps={email} className="registerInputCont inputCont ">
      <label htmlFor="email">Email</label>
      <div className="inputContM">
        <div className={validEmail ? "valid" : "hide"}>
          <Check />
        </div>
        <div className={validEmail || !email ? "hide" : "invalid"}>
          <Dangerous />
        </div>
        <input
          className="registerInput"
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailnote"
          onFocus={() => setEmailFocus(false)}
          onBlur={() => setEmailFocus(true)}
          placeholder="Enter you Email"
        />
      </div>

      <p
        id="emailnote"
        className={
          emailFocus && email && !validEmail ? "regGuide" : "offscreen"
        }
      >
        <InfoOutlined style={{ margin: "0 10px 0 0" }} />
        Invalid Email
      </p>
    </div>
  );
};

export default EmailComp;
