import React from "react";
import styled from "styled-components";
const List = styled.div`
  background-color: red;
  padding: 1rem;
`;
const ProductsCategoriesLists = () => {
  return (
    <List>
      <Cont>Mens</Cont>
      <Cont>Womens</Cont>
      <Cont>Accossories</Cont>
    </List>
  );
};

export default ProductsCategoriesLists;
