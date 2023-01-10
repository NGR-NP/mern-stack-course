import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 100px);
  }
  100%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 127px);
  } 
`;
const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 280px; //note for small screen 200px
  height: ${(props) => props.height}px;
  height: 350px;
  margin: 5px;
  padding: 12px;
  overflow: hidden;
  background: linear-gradient(5deg, rgb(172 234 255) 0%, rgb(249 217 250) 100%);
  border-radius: 8px;
  position: relative;
`;
const Part = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Loading = styled.div`
  width: 100%;
  border-radius: 6px;
  position: absolute;
  height: 100%;
  background: repeating-linear-gradient(320deg, #f9f9f9, transparent 100px);
  animation: ${skeleton} 0.3s linear infinite alternate;
`;
const LoadingComp = () => {
  return (
    <>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
      <Main>
        <Part>
          <Loading />
        </Part>
      </Main>
    </>
  );
};

export default LoadingComp;
