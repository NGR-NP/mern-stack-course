import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import LoadingComp from "../components/loading/LoadingComp";
import Product from "../components/products/Product";
import ErrMsg from "../components/Forms/ErrMsg";
const PRODUCTS_URL = "/products";

const Container = styled.section`
  max-width: 1557px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  user-select: none;
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
    <Container>
      {isLoading ? (
        <>
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
        </>
      ) : (
        <>
          {products.slice(0, 20).map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </>
      )}
      {ifErr ? <ErrMsg errMsg={errMsg} /> : <></>}
    </Container>
  );
};

export default Products;
