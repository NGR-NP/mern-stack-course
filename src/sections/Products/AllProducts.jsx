import LocalMallIcon from "@mui/icons-material/LocalMall";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import styled, { keyframes } from "styled-components";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useEffect, useState } from "react";
const PRODUCTS_URL = "/products";

const scletion = keyframes`

  0%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 100px);
  }
  100%{
    background:repeating-linear-gradient(315deg,#f9f9f9,transparent 127px);
  } 
`;
const Container = styled.div`
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
  border-radius: calc(8px + 5px);
`;

const Main = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  display: flex;
  width: 60vmin;
  margin: auto;
  font-size: 42px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  justify-content: center;
  border-radius: 6px;
  padding: 12px 15spx;
  font-family: var(--font4);
`;
const FilterCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const FTitle = styled.div`
  margin-right: 12px;
  font-size: 25px;
  padding: 5px 9px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
  font-family: var(--font1);
  border-radius: 6px;
`;
const ColorLensIcons = styled(ColorLensIcon)`
  position: absolute;
  left: 10px;
`;
const Select = styled.select`
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  font-size: 18px;
  padding: 9px 36px 9px 29px;
  text-align: center;
  background-color: var(--pink);
  color: #4e4e4e;
  border: 0;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
`;
const Option = styled.option`
  font-size: 18px;

  text-align: left;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  height: 100%;
  width: 2rem;
  background: #c2ecff;
  pointer-events: none;
  border-radius: 0 5px 5px 0;
  &::before,
  &::after {
    --size: 0.4em;
    --arrow: rgba(65, 65, 65, 0.766);
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid var(--arrow);
    top: 35%;
  }
  &::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid var(--arrow);
    top: 65%;
  }
`;
const Part = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Loading = styled.div`
  //width: calc(100% - 52px);
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
    transform: scale(1.1);
  }
`;

const FavIcon = styled(BookmarkBorderIcon)`
  position: absolute;
  z-index: 1;
  top: -20%;
  right: 7%;
  opacity: 0;
  transition: all 0.9s ease-in-out;
  cursor: pointer;
  color: ${(props) => props.favcolor};
  ${Img}:hover + & {
    opacity: 1;
    top: -4.5%;
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
  bottom: 2%;
  right: 3%;
  opacity: 0;
  color: ${(props) => props.bagcolor};
  background: rgba(255, 255, 255, 0.627);
  box-shadow: var(--boxShadow);
  backdrop-filter: blur(100px);
  padding: 8px;
  border-radius: 50px;
  font-size: 7px;
  transition: all 2s ease-in-out;
  ${Img}:hover + ${FavIcon} + & {
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
  left: 2%;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  background: linear-gradient(
    181deg,
    rgb(209 243 255) 0%,
    rgb(253 214 255) 100%
  );
  /* background-color: ${(props) => props.bgcolors}; */
  background: rgba(255, 255, 255, 0.553);
  box-shadow: 0px 0px 6px 0px rgb(220 220 220);
  backdrop-filter: blur(10px);
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
  ${Img}:hover+ ${FavIcon} + ${AddToShoppingBag} +  & {
    bottom: -5%;
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
const AllProducts = ({ product, height }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL);
        setProducts(res?.data);
        setIsLoading(false);
        setIfErr(false);
      } catch (err) {
        if (!err?.response) {
          setIsLoading(false);
          setIfErr(true);
          setErrMsg("Server is not responding");
        } else if (err.response?.data) {
          setIsLoading(false);
          setIfErr(true);
          setErrMsg(err.response?.data?.message);
        } else {
          setErrMsg("something went wrong");
        }
      }
    };
    getProducts();
  }, []);
  return (
    <>
      {product.slice(0, 20).map((product) => {
        <Main>
          <Title>Clothes</Title>
          <FilterCont>
            <FTitle>Filter Products:</FTitle>
            <Filter>
              <ColorLensIcons fontSize="small" color="error" />
              <Select>
                <Option>Color</Option>
                <Option>Red</Option>
                <Option>Green</Option>
                <Option>White</Option>
              </Select>
              <Arrow />
            </Filter>
          </FilterCont>
          <Container height={height}>
            <Part>
              <Loading />
              <Img src={product.img} alt={product.title} />
              <FavIcon sx={{ fontSize: 30 }} favcolor={product.color} />
              <AddToShoppingBag
                sx={{ fontSize: 30 }}
                bagcolor={product.color}
              />
              <Price color={product.color} bgcolors={product.color}>
                Rs. {product.price}
              </Price>
            </Part>
          </Container>
        </Main>;
      })}
    </>
  );
};

export default AllProducts;
