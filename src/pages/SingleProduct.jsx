import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useGetProductsQuery } from "../new/products/productApiSlice";
import LoadingGif from "../components/loading/LoadingGif";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import Options from "../components/Options/Options";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../new/cart/cartSlice";
const Section = styled.section`
  margin: 4rem 0;
  @media screen and (max-width: 850px) {
    margin: 0;
  }
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Cont = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: rgb(254 241 255);
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
  @media screen and (min-width: 851px) {
    border-radius: 20px;
    align-items: flex-end;
    margin: 0 1rem;
  }
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 88%;
  object-fit: cover;
  -webkit-user-drag: none;
  border-radius: 0 10px 10px 0;
  @media screen and (max-width: 850px) {
    border-radius: 10px;
  }
  @media screen and (min-width: 850px) {
    margin-left: 2rem;
    border-radius: 2.5rem 10px 10px 2.5rem;
  }
`;
const Catg = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 0;
  .catg {
    padding: 0 1rem;
    color: #474545;
    :last-child {
      padding-right: 0;
    }
  }
  @media screen and (max-width: 450px) {
    font-size: 0.6125rem;
    margin-bottom: 5px;
    .catg {
      padding: 0.5rem;
    }
  }
`;
const Details = styled.div`
  flex: 1;
  padding: 0.5rem 2rem;
  color: #474545;
  margin: auto 1rem;
  font-family: var(--font1);
  z-index: 11;
  box-shadow: 0px 0px 7px #d0c6c6;
  border-radius: 10px;
  background-color: rgb(254 238 255);
  @media screen and (max-width: 850px) {
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 900px) {
    margin: 20px 22px 37px 12px;
  }
`;
const Info = styled.div`
  @media screen and (min-width: 500px) {
    position: relative;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--font3);
  margin: 14px 0;
  line-height: 1;
  text-transform: capitalize;
`;
const Desc = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 50px 0;
  font-family: var(--fontDesc);
  margin: 14px 0;
`;
const Choose = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 10px 5px;
  @media screen and (min-width: 501px) {
    position: absolute;
    bottom: -56px;
    right: 0;
    display: flex;
    flex-direction: column;
  }
`;
const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0px;
  .icon {
    box-shadow: var(--boxShadow);
    border-radius: 50px;
    padding: 4px;
    cursor: pointer;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`;
const Qty = styled.div`
  background: transparent;
  color: black;
  padding: 8px 14px;
  font-size: 1.47rem;
  border-radius: 9px;
  box-shadow: var(--boxShadow);
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.div`
  text-transform: capitalize;
  font-size: 1.6rem;
  padding: 10px 5px;
  font-family: var(--font6);
  margin-right: 18px;
`;
const Bottom = styled.div`
  padding: 10px 5px;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
const Btn = styled.button`
  margin: auto;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75em 1.5em;
  font-size: 0.925rem;
  font-family: var(--font-4);
  letter-spacing: 2px;
  &:is(:hover, :focus) {
    background-color: rgb(253 227 255);
  }
  cursor: pointer;
  background-color: transparent;
  box-shadow: 8px 9px 20px 0px rgb(91 91 91 / 29%);
`;
const CatgCont = styled.div`
  text-align: right;
  padding: 30px 5px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const SingleProduct = ({ val }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery({
    id,
  });

  const handleQty = (type) => {
    if (type === "dec") {
      qty > 1 && setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };
  const handleAddCart = () => {
    dispatch(addProductToCart({ ...product, qty, color, size }));
  };
  let content;
  if (isLoading) {
    content = <LoadingGif />;
  } else if (isSuccess) {
    content = (
      <Cont>
        <ImgCont>
          <Img src={product?.img} alt={product.title} />
        </ImgCont>
        <Details>
          <Info>
            <Title>{product.title}</Title>
            <Desc>{product?.desc}</Desc>
            <Amount>
              <Price>Rs.{product.price}</Price>
              <Wrap>
                <Remove className="icon" onClick={() => handleQty("dec")} />
                <Qty>{qty}</Qty>
                <Add className="icon" onClick={() => handleQty("inc")} />
              </Wrap>
            </Amount>
            <Choose>
              <Options
                title={"Color"}
                setChoose={setColor}
                option={product?.color}
              >
                {val}
              </Options>
              <Options
                title={"Size"}
                setChoose={setSize}
                option={product?.size}
              />
            </Choose>
          </Info>
          <Bottom>
            <Btn onClick={handleAddCart}>
              Add to Cart <AddShoppingCart />
            </Btn>
            <CatgCont>
              <Catg>
                {product?.category.map((c) => (
                  <Link className="catg" key={c} to={`/shop/${c}`}>
                    {c}
                  </Link>
                ))}
              </Catg>
            </CatgCont>
          </Bottom>
        </Details>
      </Cont>
    );
  } else if (isError) {
    <p>{error?.response?.message}</p>;
  }
  return (
    <Section className="centerADiv">
      <Main>{content}</Main>
    </Section>
  );
};

export default SingleProduct;
