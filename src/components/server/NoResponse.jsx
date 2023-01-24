import React from "react";
import Server from "../../images/server.png";

import styled from "styled-components";
import ErrMsg from "../Forms/ErrMsg";
import { useState } from "react";
import { useEffect } from "react";
const ServerCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  .msg {
    background: red;
    padding: 10px 14px;
    border-radius: 6px;
  }
`;
const ServerImg = styled.img`
  max-width: 800px;
  width: 60%;
  border-radius: 57px;
`;
const NoResponse = ({ message }) => {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setMsg(message);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, [message]);
  const errMsg = msg || "server is not responding"
  return (
    <ServerCont>
      {show && <ErrMsg errMsg={errMsg} />}
      <ServerImg src={Server} alt={errMsg} />
      <p className="msg">{errMsg}</p>
    </ServerCont>
  );
};

export default NoResponse;
