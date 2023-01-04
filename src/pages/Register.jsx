import React from "react";
import RegisterComp from "../components/Forms/RegisterComp";
import "../style/Register.css";

const Register = () => {
  return (
    <div className="registerCont">
      <div className="registerSec">
        <RegisterComp />
      </div>
    </div>
  );
};

export default Register;
