import React from "react";
import "../style/Login.css";
import GoToHome from "../components/Icons/GoToHome";
import Login from "../new/auth/Login";

const LoginPage = () => {
  return (
    <div className="loginSec">
      <Login />
      <GoToHome />
    </div>
  );
};

export default LoginPage;
