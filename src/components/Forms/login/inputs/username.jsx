import React from "react";

const Username = ({ username, setUsername }) => {
  // const handleUsernameInput = (e) => setUsername(e.traget.value);
  return (
    <div className="loginInputCont bdrTop">
      <label htmlFor="email">Email</label>
      <input
        className="loginInput"
        autoFocus
        placeholder="Enter your username"
        id="username"
        name="username"
        type="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
      />
    </div>
  );
};

export default Username;
