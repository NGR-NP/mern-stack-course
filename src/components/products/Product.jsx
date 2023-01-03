import LocalMallIcon from "@mui/icons-material/LocalMall";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import styled, { keyframes } from "styled-components";
const scletion = keyframes`
  /* 0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 80px);
  }
  20%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 82px);
  }40%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 84px);
  }
  60%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 84px);
  }0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 82px);
  }80%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 80px);
  }100%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 78px);
  } */
  
  /* 0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 80px);
  }
  20%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 84px);
  }45%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 86px);
  }55%{
    background:repeating-linear-gradient(135deg,transparent,#f9f9f9 84px);
  }
  80%{
    background:repeating-linear-gradient(135deg,transparent,#f9f9f9 80px);
  }
  100%{
    background:repeating-linear-gradient(135deg,transparent,#f9f9f9 76px);
  } */
  0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 100px);
  }
  /* 25%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 81px);
  }50%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 82px);
  }75%{
    background:repeating-linear-gradient(135deg,transparent,#f9f9f9 82px);
  } */
  100%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 127px);
  } 
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  padding: 12px;
  overflow: hidden;
  background: linear-gradient(
    5deg,
    rgb(193 238 253 / 51%) 0%,
    rgb(249 217 250 / 72%) 100%
  );
  border-radius: 8px;
  position: relative;
`;
const Loading = styled.div`
  width: calc(100% - 52px);
  border-radius: 6px;
  position: absolute;
  height: 91%;
  background: repeating-linear-gradient(320deg, #f9f9f9, transparent 100px);
  animation: ${scletion} 0.3s linear infinite alternate;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  z-index: 1;
  user-drag: none;
  position: relative;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const FavIcon = styled(BookmarkBorderIcon)`
  position: absolute;
  z-index: 1;
  top: -10%;
  right: 7%;
  opacity: 0;
  transition: all 0.9s ease-in-out;
  cursor: pointer;
  color: #000000;
  ${Img}:hover + & {
    opacity: 1;
    top: -1%;
    transition: all 0.9s ease-in-out;
  }

  &:hover {
    transition: all 0.9s ease-in;
    top: 2%;
    opacity: 1;
  }
`;
const AddToShoppingBag = styled(LocalMallIcon)`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  bottom: 7%;
  right: 7%;
  color: ${(props) => props.bagcolor};
  background-color: #e4e4e4a0;
  backdrop-filter: blur(100px);
  padding: 8px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  ${Img}:hover + ${FavIcon} + & {
    bottom: 5%;
    right: 6%;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    font-size: 40px;
  }
`;
const Price = styled.p`
  position: absolute;
  bottom: -30%;
  left: 7%;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  background-color: #ffffff8d;
  box-shadow: 0px 0px 6px 0px rgb(220 220 220);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 7px;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  /* color: ${(props) =>
    props.color === "white"
      ? "rosybrown"
      : "white" || props.color === "green"
      ? "white"
      : "black" || props.color === "gray"
      ? "white"
      : "black" || props.color === ",,purple"
      ? "white"
      : "black" || props.color === "sky blue"
      ? "black"
      : "black" || props.color === "red"
      ? "white"
      : "black"}; */
  ${Container} + ${Img}+ ${FavIcon} + ${AddToShoppingBag} + & {
    bottom: -1%;
    opacity: 1;
  }
  ${Img}:hover+ ${FavIcon} + ${AddToShoppingBag} +  & {
    bottom: -1%;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  ${AddToShoppingBag}:hover+& {
    bottom: 3%;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    left: 9%;
  }
  ${FavIcon}:hover + ${AddToShoppingBag}+  & {
    bottom: 3%;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    left: 9%;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    bottom: 1%;
    opacity: 1;
  }
`;
const Product = ({ product }) => {
  return (
    <Container>
      <Loading />
      <Img src={product.img} alt={product.title} />
      <FavIcon sx={{ fontSize: 30 }} />
      <AddToShoppingBag sx={{ fontSize: 30 }} bagcolor={product.color} />
      <Price color={product.color} if={product.color}>
        Rs. {product.price}
      </Price>
    </Container>
  );
};

export default Product;
