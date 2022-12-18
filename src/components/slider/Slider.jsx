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
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  background: linear-gradient(${(props) => props.lineGrad});
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  -webkit-user-drag: none;
  box-shadow: 0px 0px 20px 9px #ffbe82; // winter ffffff82  summer ffbe82 acc d05858
  box-shadow: 0px 0px 20px 9px #${(props) => props.shadow || "ffffff4f"};
  border-radius: 0 22px 22px 0;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 20px 50px;
  color: white;
  font-family: var(--font1);
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 70px;
  font-family: var(--font3);
  margin: 14px 0 28px 0;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0;
  font-family: var(--fontDesc);
  margin: 14px 0 28px 0;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  box-shadow: 8px 9px 20px 0px rgb(91 91 91 / 29%);
`;

const Slider = ({ slide }) => {
  setTimeout(() => {}, 1000);
  return (
    <Main slide={slide}>
      {sliderSales.map((item) => (
        <Container key={item.id} bg={item.bg} lineGrad={item.lineGrad}>
          <ImgCont>
            <Image shadow={item.shadow} src={item.img} alt={item.title} />
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
