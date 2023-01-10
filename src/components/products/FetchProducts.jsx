import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "../../api/axios";

const PRODUCTS_URL = "/products";

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  user-select: none;
`;

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [ifErr, setIfErr] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL);
        setProducts(res.data);
      } catch (err) {
        if (!err?.response) {
          setIfErr(true);
          setErrMsg("Server is not responding");
        } else {
          setErrMsg(err.response.data.message);
        }
      }
    };
    getProducts();
  }, []);
  return (
    <>
      {ifErr ? (
        errMsg
      ) : (
        <Container>
          {products.slice(0, 8).map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </Container>
      )}
    </>
  );
};

export default FetchProducts;
