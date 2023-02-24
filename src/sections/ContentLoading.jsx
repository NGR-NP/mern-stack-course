import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components"; 
const ring = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Main = styled.div`
  position: fixed;
  margin-top: 2.25rem;
  left: 50%;
  width: 100vw;
  color: rgb(209 213 219 / 1);
  z-index: 9999;
`
const Sec = styled.div`
display: inline-block;
position: relative;
width: 5rem;
height: 5rem;
`
const Circle = styled.div`
    box-sizing: border-box;
  display: block;
  position: absolute;
  width: 22px;
  height: 22px;
  margin: 2px;
  border: 2px solid #f9a0fc;
  border-radius: 50%;
  animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #f9a0fc transparent transparent transparent;
  :nth-child(1) {
  animation-delay: -0.45s;
 }
 :nth-child(2) {
  animation-delay: -0.3s;
 }
 :nth-child(3) {
  animation-delay: -0.15s;
 }
`
const ContentLoadding = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setLoading(false);
        } else {
            window.onload = () => setLoading(false)
        }
    }, []);

    return (
        <>
            {loading &&<p>t</p>}
                <Main>
                    <Sec>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </Sec>
                </Main>
            {/* // } */}
        </>
    );
};

export default ContentLoadding;