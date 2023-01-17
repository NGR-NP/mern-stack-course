import React from "react";
import { useGetProductsQuery } from "./productApiSlice";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Products from "../../components/products/Product";
import LoadingComp from "../../components/loading/LoadingComp";
import styled from "styled-components";
import ErrMsg from "../../components/Forms/ErrMsg";
import Server from "../../images/server.png";

const Section = styled.section`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  background: linear-gradient(299deg, rgb(142 218 243 / 50%), rgb(254 213 255));
  user-select: none;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  border-radius: 8px;
`;
const Container = styled.div`
  max-width: 1557px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  border-radius: calc(20px + 8px);
`;
const Main = styled.div`
  padding: 20px;
  margin: auto;
  background: #ffffff54;
  border-radius: calc(20px + 8px);
`;

const Title = styled.h3`
  width: fit-content;
  margin: 19px auto 32px;
  text-align: center;
  font-size: 41px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px 0px;
  border-radius: 20px;
  font-family: var(--font6);
  background-image: linear-gradient(90deg, rgb(0 178 255), #ff00b0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 5px 118px;
  letter-spacing: 5px;
`;
const FilterCont = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const FTitle = styled.div`
  margin-right: 12px;
  font-size: 23px;
  padding: 8px 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 20px 0px;
  font-family: var(--font1);
  border-radius: 6px;
  color: #636363;
`;
const ColorLensIcons = styled(ColorLensIcon)`
  position: absolute;
  left: 10px;
`;
const Select = styled.select`
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  font-size: 18px;
  padding: 9px 36px 9px 29px;
  text-align: center;
  background-color: var(--pink);
  color: #4e4e4e;
  border: 0;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
`;
const Option = styled.option`
  font-size: 18px;

  text-align: left;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  height: 100%;
  width: 2rem;
  background: var(--midBlue);
  pointer-events: none;
  border-radius: 0 5px 5px 0;
  &::before,
  &::after {
    --size: 0.4em;
    --arrow: rgb(255 255 255 / 77%);
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid var(--arrow);
    top: 35%;
  }
  &::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid var(--arrow);
    top: 65%;
  }
`;
const ServerCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
const ServerImg = styled.img`
  max-width: 800px;
  width: 60%;
  border-radius: 57px;
`;
const AllProducts = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  let content;
  if (isLoading) {
    content = (
      <Container>
        <LoadingComp />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        <Title>Clothes</Title>
        <FilterCont>
          <FTitle>Filter Products:</FTitle>
          <Filter>
            <ColorLensIcons fontSize="small" color="error" />
            <Select>
              <Option>Color</Option>
              <Option>Red</Option>
              <Option>Green</Option>
              <Option>White</Option>
            </Select>
            <Arrow />
          </Filter>
        </FilterCont>
        <Container>
          {products.map((product) => (
            <Products product={product} key={product?._id} />
          ))}
        </Container>
      </>
    );
  } else if (isError) {
    content = (
      <ServerCont>
        <ErrMsg errMsg={error?.data?.message} />
        <ServerImg src={Server} alt={error.data.message} />
      </ServerCont>
    );
  }
  return (
    <Section>
      <Main>{content}</Main>
    </Section>
  );
};

export default AllProducts;
