import React from "react";
import styled from "styled-components";
import { sliderSales } from "../../data/data";
const Main = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slide * -100}vw);
`;
const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
  z-index: 1;
  margin-top: 10%;
`;
const Image = styled.img`
  mix-blend-mode: multiply;
  width: 100%;
  height: 85%;
  object-fit: cover;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 50px;
  color: white;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: transparent;
`;

const Slider = ({ slide }) => {
  return (
    <Main slide={slide}>
      {sliderSales.map((item) => (
        <Container key={item.id} bg={item.bg}>
          <ImgCont>
            <Image src={item.img} alt={item.title} />
          </ImgCont>
          <InfoCont>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>Buy Now</Button>
          </InfoCont>
        </Container>
      ))}
    </Main>
  );
};

export default Slider;
