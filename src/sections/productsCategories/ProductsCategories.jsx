import React from "react";
import styled from "styled-components";
import ProductsCategoriesLists from "../../components/productscategorieslists/ProductsCategoriesLists.jsx";
const Section = styled.section`
  background: var(--lightBlueBackground);
  display: flex;
  
`;
const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto;
`;

const ProductsCategories = () => {
  return (
    <Section>
      <Container>
        <ProductsCategoriesLists />
      </Container>
    </Section>
  );
};

export default ProductsCategories;
