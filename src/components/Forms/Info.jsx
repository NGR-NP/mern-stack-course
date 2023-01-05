import React from "react";
import { Link } from "react-router-dom";

const Info = ({ message, where }) => {
  return (
    <div className="infoCont">
      <p>{message}</p>
      <Link to={where}>{where}</Link>
    </div>
  );
};

export default Info;
