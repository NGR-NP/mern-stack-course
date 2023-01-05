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
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL, {
          headers: { "Content-Type": "application/json" },
        });
        setProducts(res.data);
      } catch (err) {
        setProducts(err.response)
      }
    };
    getProduct();
  });
  return (
    <Container>
      {products.slice(0, 8).map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </Container>
  );
};

export default FetchProducts;
