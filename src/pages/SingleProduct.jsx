import React from "react";
import styled from "styled-components";
import Options from "../components/Options/Options";
import MenCoat from "../images/mens/coat.png";
const Section = styled.section`
margin: 2rem 0;
@media screen and (max-width: 700px) {
  margin: 0;
  }
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;

`;

const Cont = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: rgb(254 241 255);
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    border-radius: 20px;
    align-items: flex-end;
    margin: 0 1rem;
  }
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  -webkit-user-drag: none;
  border-radius: 0 10px 10px 0;
  @media screen and (max-width: 700px) {
    border-radius: 10px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 2rem;
    border-radius: 2.5rem 10px 10px 2.5rem
    
  }
`;
const Ctg = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
const Details = styled.div`
  flex: 0.6;
  margin: 20px 19px 42px;
  padding: 0.5rem 2rem;
  color: #474545;
  font-family: var(--font1);
  z-index: 11;
  backdrop-filter: blur(1px);
  box-shadow: 0px 0px 7px #d0c6c6;
  border-radius: 10px;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;
const Info = styled.div``;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--font3);
  margin: 14px 0 28px 0;
  line-height: 1;
  text-transform: capitalize;
`;
const Desc = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 50px 0;
  font-family: var(--fontDesc);
  margin: 14px 0 28px 0;
`;
const Choose = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Price = styled.div`
text-transform: capitalize;
font-size: 2rem;
padding:
10px 5px 5px;
`;
const Bottom = styled.div``;
const Btn = styled.button`
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75em 1.5em;
  font-size: 0.925rem;
  font-family: var(--font-4);
  letter-spacing: 2px;
  &:is(:hover, :focus) {
    background-color: #fce2ee;
  }
  cursor: pointer;
  background-color: transparent;
  box-shadow: 8px 9px 20px 0px rgb(91 91 91 / 29%);
`;
const CtgCont = styled.div`
  text-align: right;
`;
const SingleProduct = () => {
  return (
    <Section className="centerADiv">
      <Main>
        <Cont>
          <ImgCont>
            <Img src={MenCoat} alt="test" />
          </ImgCont>
          <Details>
            <Info>
              <Title>title</Title>
              <Desc>this is desc</Desc>
            </Info>
            <Choose>
              <Options title={"Color"} option={"red"} />
              <Options title={"Size"} option={"Large"} />
            </Choose>
            <Price>
                rs.200
            </Price>
            <Bottom>
              <Btn>Add to Cart</Btn>
              <CtgCont>
                <Ctg>mens</Ctg>
              </CtgCont>
            </Bottom>
          </Details>
        </Cont>
      </Main>
    </Section>
  );
};

export default SingleProduct;
