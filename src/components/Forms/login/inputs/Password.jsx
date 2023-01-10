import React from "react";

const Password = ({ password, setPassword }) => {
  return (
    <div className="loginInputCont  bdrBottom">
      <label htmlFor="password">Passowrd</label>
      <input
        className="loginInput"
        name="password"
        id="password"
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter your Password"
      />
    </div>
  );
};

export default Password;
