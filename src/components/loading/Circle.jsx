import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }100%{
        transform: rotate(360deg)
    }
`;
const Loading = styled.div`
  border: 5px solid pink;
  border-top: 5px solid white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  right: 45px;
  top: 19%;
  animation: ${spin} 2s linear infinite;
`;
const Circle = () => {
  return <Loading />;
};

export default Circle;
