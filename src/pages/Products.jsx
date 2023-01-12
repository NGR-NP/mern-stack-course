import { useEffect, useState } from "react";
import styled from "styled-components";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import axios from "../api/axios";
import LoadingComp from "../components/loading/LoadingComp";
import Product from "../components/products/Product";
import ErrMsg from "../components/Forms/ErrMsg";
const PRODUCTS_URL = "/products";

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
  background: linear-gradient(299deg, rgb(142 218 243 / 50%), rgb(254 213 255));
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
  font-family: var(--font7);
  background-image: linear-gradient(90deg, rgb(0 178 255), #ff00b0);
  color: transparent;
  background-clip: text;
  padding: 13px 69px;
`;
const FilterCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const FTitle = styled.div`
  margin-right: 12px;
  font-size: 23px;
  padding: 10px 13px;
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
  background: #d6f3ff;
  pointer-events: none;
  border-radius: 0 5px 5px 0;
  &::before,
  &::after {
    --size: 0.4em;
    --arrow: rgba(65, 65, 65, 0.766);
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
const Products = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [ifErr, setIfErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL);
        setProducts(res?.data);
        setIsLoading(false);
        setIfErr(false);
      } catch (err) {
        if (!err?.response) {
          setIsLoading(false);
          setIfErr(true);
          setErrMsg("Server is not responding");
        } else if (err.response?.data) {
          setIsLoading(false);
          setIfErr(true);
          setErrMsg(err.response?.data?.message);
        } else {
          setErrMsg("something went wrong");
        }
      }
    };
    getProducts();
  }, []);
  return (
    <Section>
      <Main>
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
        {isLoading ? (
          <Container>
            <LoadingComp />
          </Container>
        ) : (
          <Container>
            {products.slice(0, 20).map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </Container>
        )}
        {ifErr ? <ErrMsg errMsg={errMsg} /> : <></>}
      </Main>
    </Section>
  );
};

export default Products;
