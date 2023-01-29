import LocalMallIcon from "@mui/icons-material/LocalMall";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
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
  min-width: 300px; //note for small screen 200px
  height: ${(props) => props.height}px;
  height: 350px;
  margin: 5px;
  overflow: hidden;
  background: linear-gradient(5deg, rgb(172 234 255) 0%, rgb(249 217 250) 100%);
  border-radius: calc(8px + 5px);
  background: #ffffff3d;
  box-shadow: 1px 1px 7px #dedede47;
`;
const Part = styled.div`
  position: relative;
  height: 100%;
`;
const LCont = styled.div`
  width: 324px;
`;
const Loading = styled.div`
  width: 100%;
  border-radius: 6px;
  position: absolute;
  height: 100%;
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
    transform: scale(1.03);
  }
`;

const FavIcon = styled(BookmarkBorderIcon)`
  position: absolute;
  z-index: 1;
  top: -20%;
  right: 9%;
  opacity: 0;
  transition: all 0.9s ease-in-out;
  cursor: pointer;
  color: ${(props) => props.favcolor};
  ${Img}:hover + & {
    top: -1%;
    opacity: 1;
    transition: all 0.9s ease-in-out;
  }

  &:hover {
    transition: all 0.7s ease-in-out;
    top: -1%;
    opacity: 1;
  }
  &:active {
    transition: all 0.1s ease-in-out;
    fill: #e91f1f;
  }
`;

const AddToShoppingBag = styled(LocalMallIcon)`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  bottom: 5%;
  right: 8%;
  opacity: 0;
  color: ${(props) => props.bagcolor[0] || 'black'};
  background: rgb(208 208 208 / 63%);
  box-shadow: var(--boxShadow);
  //backdrop-filter: blur(100px);
  padding: 8px;
  border-radius: 50px;
  font-size: 7px;
  transition: all 2s ease-in-out;
  ${Img}:hover + ${FavIcon} +  & {
    transform: scale(1.2);
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.3);
    bottom: 6%;
    right: 7%;
    opacity: 1;
  }
  &:active {
    transform: scale(0.8);
  }
`;
const Price = styled.p`
  position: absolute;
  bottom: -30%;
  left: 8%;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  font-family: var(--font2);
  color: black;
  background: linear-gradient(
    181deg,
    rgb(209 243 255) 0%,
    rgb(253 214 255) 100%
  );
  /* background-color: ${(props) => props.bgcolors}; */
  background: rgb(255 255 255 / 81%);
  box-shadow: 0px 0px 6px 0px rgb(220 220 220);
  //backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 5px 8px;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  /* color: ${(props) =>
    props.color === "red"
      ? "white"
      : "red" || props.color === "green"
      ? "white"
      : "geen" || props.color === ",,purple"
      ? "white"
      : "purple" || props.color === "sky blue"
      ? "black"
      : "skyblue" || props.color === "white"
      ? "black"
      : "red"}; */
  /* color: ${(props) => props.color}; */
  ${Img}:hover+ ${FavIcon} + ${AddToShoppingBag}+ & {
    bottom: 1%;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }

  ${AddToShoppingBag}:hover+& {
    bottom: -1%;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    left: 6%;
  }
  ${FavIcon}:hover + ${AddToShoppingBag}+  & {
    bottom: -1%;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    bottom: -2%;
    opacity: 1;
    padding: 10px;
    left: 4%;
  }
`;
const Product = ({ product, height }) => {
  return (
    <Container height={height}>
      <Part>
        <LCont>
          <Loading />
        </LCont>
        <Link className="link" to={`/product/${product._id}`}>
        <Img src={product.img || "/images/MERN.png"} alt={product.title} />
        <FavIcon sx={{ fontSize: 30 }} favcolor={product.color} />
        <AddToShoppingBag sx={{ fontSize: 30 }} bagcolor={product.color} />
          <Price color={product.color} bgcolors={product.color}>
            Rs. {product.price}
          </Price>
          {/* <VisibilityIcon /> */}
        </Link>
      </Part>
    </Container>
  );
};

export default Product;
