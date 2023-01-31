import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  max-width: 1300px;
  box-shadow: 0px 6px 20px 5px rgb(0 0 0 / 9%);
  margin: 4rem auto;
  border-radius: 51px;
  @media screen and(max-width: 400px) {
    padding: "10px";
  }
  @media screen and (max-width: 360px) {
    padding: 2rem 0;
    border-radius: 0;
  }
`;
 