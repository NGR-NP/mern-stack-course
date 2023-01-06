import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Product from "./Product";
import axios from "../../api/axios";

const PRODUCTS_URL = "/products";

const scletion = keyframes`
  0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 100px);
  }

  100%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 127px);
  } 
`;
const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  user-select: none;
`;
const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 280px; //note for small screen 200px
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
  position: absolute;
  width: 95%;
  height: 95%;
  background: repeating-linear-gradient(320deg, #f9f9f9, transparent 100px);
  animation: ${scletion} 0.3s linear infinite alternate;
`;
const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const res = await axios.get(PRODUCTS_URL);
      setProducts(res.data);
      setIsloading(false);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Server is not responding");
      } else {
        setErrMsg(err.response.data.message);
      }
    }
  };
  return (
    <>
      <Container>
        {isloading ? (
          <>
            {errMsg}
            <Main>
              <Loading />
            </Main>
            <Main>
              <Loading />
            </Main>
            <Main>
              <Loading />
            </Main>
            <Main>
              <Loading />
            </Main>
          </>
        ) : (
          <>
            {products.slice(0, 8).map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </>
        )}
      </Container>
    </>
  );
};

export default FetchProducts;
