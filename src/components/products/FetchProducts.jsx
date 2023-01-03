import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ApiUrl } from "../../App";
import Product from "./Product";

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
        const res = await axios.get(`${ApiUrl}/products`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
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
