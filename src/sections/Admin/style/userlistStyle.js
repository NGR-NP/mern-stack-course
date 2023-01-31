import styled from "styled-components";

export const Section = styled.section`
  margin: 0 22px 22px;
  padding: 25px;
  box-shadow: var(--boxShadow);
  border-radius: calc(22px - 9px);
`;
export const Cont = styled.div`
  box-shadow: var(--boxShadow);
  display: grid;
  scroll-behavior: smooth;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  font-family: Mukta, sans-serif;
  color: #4f546c;
  font-size: 0.9rem;
  border-radius: calc(22px - 9px);
  height: 75vh;
`;
export const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin: 0 1px 25px 1px;
  font-family: var(--font3);
  box-shadow: 0 5px 10px rgb(226 209 226);
  padding: 3px 38px;
  border-radius: 50px;
  text-align: center;
  background-image: radial-gradient(
    circle,
    rgb(103 217 255) 0%,
    rgb(249 126 255) 100%
  );
  text-transform: capitalize;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
export const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0 5px 10px #e1e5ee;
  background-color: #f6f0f09e;
  text-align: left;
  overflow: hidden;
  /* margin: 22px; */
  border-radius: calc(22px - 9px);
  user-select: text;
`;
export const Thead = styled.thead`
  box-shadow: 0 5px 10px #e1e5ee;
`;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  background-color: ${(props) => (props.color ? "rgb(213 0 0 / 68%)" : "")};
  color: ${(props) => (props.color ? "white" : "")};
  :nth-child(even) {
    cursor: pointer;
    background-color: #f4f6fb;
  }
`;
export const Th = styled.th`
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
  cursor: pointer;
  font-weight: 900;
  :nth-child(1) {
    padding: 0;
    text-align: center;
  }
`;
export const Td = styled.td`
  padding: 1rem 2rem;
  > .red {
    background: #ffcdd2;
    color: #c62828;
  }
  > .green {
    background-color: #c8e6c9;
    color: #388e3c;
  }
  cursor: pointer;
  :nth-child(1) {
    width: 10px;
    background-color: transparent;
    box-shadow: 1px 1px 7px #9991912e;
    text-align: center;
    padding: 24px;
  }
`;
export const Role = styled.p`
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;
  text-align: center;
  width: 5rem;
  user-select: none;
  cursor: pointer;
`;