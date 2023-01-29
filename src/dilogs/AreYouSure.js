import React from "react";
import styled from "styled-components";
const ConfCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f3f3f3b;
  top: 0rem;
  height: 100vh;
  width: -webkit-fill-available;
  position: fixed;
  z-index: 99999999;
`;
const OuterLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3f3f3f18;
  top: 0rem;
  height: 100vh;
  width: -webkit-fill-available;
  position: fixed;
  z-index: -1;
`;
const ConfCard = styled.div`
  background: #fff6fe;
  max-width: 400px;
  width: 100%;
  text-align: center;
  padding: 1rem 1rem 2.5rem;

  font-size: 2rem;
  border-radius: 0.8rem;
`;
const ConfTitle = styled.p`
  font-family: var(--font3);
`;
const ConfOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const No = styled.div`
  background: #a8a6a6;
  padding: 0.1rem 2rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const Yes = styled.div`
  background: red;
  padding: 0.1rem 2rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const AreYouSure = ({ handleNo, handleYes, message }) => {
  return (
    <ConfCont>
      <OuterLayer onClick={() => handleNo(false)} />
      <ConfCard>
        <div>
          <ConfTitle>{message}</ConfTitle>
          <ConfOption>
            <No onClick={() => handleNo(false)}>No</No>
            <Yes onClick={handleYes}>Yes</Yes>
          </ConfOption>
        </div>
      </ConfCard>
    </ConfCont>
  );
};

export default AreYouSure;
