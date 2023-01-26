import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectCurrentCart } from "../new/cart/cartSlice";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1300px;
  box-shadow: var(--boxShadow);
  margin: 4rem auto;
  border-radius: 9px;
  @media screen and(max-width: 400px) {
    padding: "10px";
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "rgb(249 160 252)" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  @media screen and (max-width: 460px) {
    display: none;
  }
`;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 875px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.div``;

const PriceDetail = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem 0 0;
  @media screen and (max-width: 675px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 20px;
    gap: 25px;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  .icon {
    box-shadow: var(--boxShadow);
    border-radius: 50px;
    padding: 4px;
    cursor: pointer;
  }
`;

const ProductAmount = styled.div`
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

  @media screen and(max-width: 400px) {
    margin: "5px 15px";
  }
`;

const ProductPrice = styled.div`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 200;
  font-family: var(--font6);
  @media screen and(max-width: 400px) {
    marginbottom: "20px";
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 8%;
  /* @media screen and (max-width: 875px) {} */
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const Wrap = styled.div`
  flex-direction: column;
`;
const Links = styled(Link)`
  background-color: #ededed;
  box-shadow: var(--boxShadow);
  padding: 12px 20px;
  color: red;
  border-radius: 8px;
`;
const EmptyCart = styled(ProductionQuantityLimitsIcon)`
  font-size: 10rem;
`;
const SummaryItemText = styled.div``;

const SummaryItemPrice = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(249 160 252);
  color: white;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 4px;
`;

const Cart = () => {
  const cart = useSelector(selectCurrentCart);
  const [shipFee, setShipFee] = useState(0);
  const [shipDis, setShipDis] = useState(0);

  useEffect(() => {
    if (cart.total < 7999) {
      setShipFee(cart.total / 20);
      setShipDis(cart.total / 20 / 2);
    } else {
      setShipFee(cart.total / 12);
      setShipDis(cart.total / 12 / 2);
    }
  }, [cart]);

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.qty})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.qty === 0 ? (
              <Wrap className="centerADiv">
                <EmptyCart />
                <p> Empty Cart</p>
                <Links to="/shop">Shop Now</Links>
              </Wrap>
            ) : (
              cart.product.map((product) => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove className="icon" />
                        <ProductAmount>{product.qty}</ProductAmount>
                        <Add className="icon" />
                      </ProductAmountContainer>
                      <ProductPrice>
                        Rs {product.price * product.qty}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </>
              ))
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Fee</SummaryItemText>
              <SummaryItemPrice>Rs {Math.trunc(shipFee)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>
                Rs <s>{Math.trunc(shipDis)}</s>
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                Rs {Math.trunc(cart.total + shipFee - shipDis)}
              </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
