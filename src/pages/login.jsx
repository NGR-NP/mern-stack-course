import React from "react";
import "../style/Login.css";
import GoToHome from "../components/Icons/GoToHome";
import LoginComp from "../components/Forms/login/LoginComp";

const Login = () => {
  return (

    <div className="loginSec">
      <LoginComp/>
      <GoToHome />
    </div>
  );
};

export default Login;
