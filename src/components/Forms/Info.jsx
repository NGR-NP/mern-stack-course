import React from "react";
import { Link } from "react-router-dom";

const Info = ({ message, where, whereto }) => {
  return (
    <div className="infoCont">
      <p>{message}</p>
      <Link to={whereto}>{where}</Link>
    </div>
  );
};

export default Info;
