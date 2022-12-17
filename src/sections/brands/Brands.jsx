import styled from "styled-components";
import BrandsLists from "../../components/brandsLists/BrandsLists";
const Section = styled.section`
  background: linear-gradient(
    174deg,
    rgb(193 238 253) 0%,
    rgb(249 217 250) 100%
  );
  display: flex;
  padding: 5vw;
`;
const Container = styled.div`
  max-width: 1200px;
  width: 80vw;
  padding: 1rem;
  margin: auto;
  background: #ffffff00;
  box-shadow: 0px 0px 20px 6px #7b7b7b1f;
  border-radius: 8px;
`;
const Lists = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  overflow: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  height: calc(5vw / 1);
`;

const Brands = () => {
  return (
    <>
      <Section>
        <Container className="centerADiv">
          <Lists>
            <BrandsLists />
          </Lists>
        </Container>
      </Section>
    </>
  );
};

export default Brands;
