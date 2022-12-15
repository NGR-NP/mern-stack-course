import React from "react";
import "../style/Register.css";
const Register = () => {
  return (
    <div className="registerCont">
      <div className="registerSec">
        <div className="registerMain">
          <div className="registerTitle title">Register</div>
          <div className="registerInputCont inputCont bdrTop">
            <label htmlFor="userName">userName</label>
            <input
              className="registerInput"
              type="text"
              placeholder="Enter your Name"
            />
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
          <div className="registerInputCont inputCont bdrBottom">
            <label htmlFor="password">Password</label>
            <input
              className="registerInput"
              type="password"
              name="password"
              id="password"
              placeholder="Set Password"
            />
          </div>
          <div className="centerADiv">
            <button className="registerBtn">Submit</button>
          </div>
          <div className="infoCont">
            <p>Already have an Account?</p>
            <a href="/">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
