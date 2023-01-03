import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  padding: 12px;
  overflow: hidden;
  background: linear-gradient(
    5deg,
    rgb(193 238 253 / 51%) 0%,
    rgb(249 217 250 / 72%) 100%
  );
  border-radius: 8px;
  position: relative;
`;
const Loading = styled.div`
  width: calc(100% - 52px);
  border-radius: 6px;
  background-color: #ffffff42;
  position: absolute;
  height: 91%;
`;
const Img = styled.img`
  width: calc(100% - 20px);
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  z-index: 11;
  user-drag: none;
  position: relative;
`;

const Price = styled.p`
  position: absolute;
  bottom: 10px;
  left: 15%;
  z-index: 111;
  background-color: #ffffffa7;
  padding: 7px;

`;
const Product = ({ product }) => {
  return (
    <Container>
      <Loading />
      <Img src={product.img} loading="lazy" alt={product.title} />
      <Price>Rs.{product.price}</Price>
    </Container>
  );
};

export default Product;
