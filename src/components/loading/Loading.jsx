import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #${(props) => props.bg};
  background: linear-gradient(${(props) => props.lineGrad});
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  /* position: relative; */
`;
// const Icon = styled.img`
//   position: absolute;
//   top: ${(props) => (props.place === "top" && props.top)};
//   bottom: ${(props) => (props.place === "bottom" && props.bottom)  || "0px" };
//   width: 12vmin;
//   right: -22px;
//   -webkit-user-drag: none;
//   animation: ${move} 2.5s infinite;
// `;
const Image = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  -webkit-user-drag: none;
  box-shadow: 3px 1px 20px 9px #${(props) => props.shadow || "ffffff4f"};
  border-radius: 0 22px 22px 0;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 20px 50px;
  color: white;
  font-family: var(--font1);
  z-index: 11;
  backdrop-filter: blur(1px);
`;
const Icon = styled.img`
  position: absolute;
  right: 23px;
  top: 13%;
  width: 16vmin;
  -webkit-user-drag: none;
  animation: ${move} 2.5s infinite;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 70px;
  font-family: var(--font3);
  margin: 14px 0 28px 0;
  line-height: 1;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0;
  font-family: var(--fontDesc);
  margin: 14px 0 28px 0;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  box-shadow: 8px 9px 20px 0px rgb(91 91 91 / 29%);
`;
export default function Loading() {
  const SlideLoading = () => (
    <Container key={item.id} bg={item.bg} lineGrad={item.lineGrad}>
      <Icon
        place={item.place}
        top={item.top}
        bottom={item.bottom}
        src={item.icon}
      />
      <ImgCont>
        <Image shadow={item.shadow} src={item.img} alt={item.title} />
      </ImgCont>
      <InfoCont>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>Buy Now</Button>
      </InfoCont>
    </Container>
  );
  return SlideLoading;
}
