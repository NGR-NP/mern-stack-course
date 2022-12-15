import React from "react";
import "../style/Login.css";

const Login = () => {
  return (
    <div className="loginCont">
      <div className="loginSec">
        <div className="loginMain">
          <div>
            <div className="loginTitle">Login</div>

            <div className="loginInputCont bdrTop">
              <label htmlFor="email">Email</label>
              <input
                className="loginInput"
                placeholder="Enter your Email"
                aria-label="Email"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="loginInputCont  bdrBottom">
              <label htmlFor="password">Passowrd</label>
              <input
                className="loginInput"
                name="password"
                id="password"
                placeholder="Enter your Password"
                aria-label="Password"
                type="password"
              />
            </div>
            <div className="centerADiv">
              <button className="loginBtn" variant="primary">
                Login
              </button>
            </div>
            <div className="infoCont">
              <p>Do not have an Account?</p>
              <a href="/">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
