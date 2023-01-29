import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Btn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "rgb(249 160 252)" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  @media screen and (max-width: 460px) {
    display: none;
  }
`;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const TopBottons = ({ setShowConf, qty }) => {
  return (
    <Cont>
      {qty === 0 ? (
        <Btn>
          <Link to="/shop">Start Shopping</Link>
        </Btn>
      ) : (
        <Btn onClick={() => setShowConf(true)}>Clear Cart</Btn>
      )}
      <TopTexts>
        <TopText>Shopping Bag({qty})</TopText>
        <TopText>Your Wishlist (0)</TopText>
      </TopTexts>
      <Btn type="filled">CHECKOUT NOW</Btn>
    </Cont>
  );
};

export default TopBottons;
