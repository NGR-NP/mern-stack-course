import React from "react";
import styled from "styled-components";
import FetchProducts from "../../components/products/FetchProducts";
const Section = styled.section`
  background: var(--lightBlueBackground);
`;

const Products = () => {
  return (
    <Section>
      <FetchProducts />
    </Section>
  );
};

export default Products;
