import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  emptyCart,
  selectCurrentProduct,
  selectCurrentQty,
} from "../new/cart/cartSlice";
import { useState } from "react";
import TopBottons from "../components/cart/TopBottons";
import SummaryComp from "../components/cart/SummaryComp";
import ProductComp from "../components/cart/ProductComp";
import AreYouSure from "../dilogs/AreYouSure";
import EmptyCartComp from "../components/cart/EmptyCartComp";
import { showToastMessage } from "../new/custonToast/toastSlice";

import { Container, Wrapper } from "./style/cartStyle";

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 98%;
`;

const Cart = () => {
  const product = useSelector(selectCurrentProduct);
  const qty = useSelector(selectCurrentQty);
  const dispatch = useDispatch();
  const [showConf, setShowConf] = useState(false);

  const handleYes = () => {
    dispatch(emptyCart());
    dispatch(
      showToastMessage({
        message: "All Products removed Successfully!",
        type: "success",
      })
    );
    setShowConf(false);
  };

  return (
    <Container>
      {showConf && (
        <AreYouSure
          handleNo={setShowConf}
          message={"Are you Sure?"}
          handleYes={handleYes}
        />
      )}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TopBottons setShowConf={setShowConf} qty={qty} />
        <Bottom>
          <Info>
            {product.length === 0 ? (
              <EmptyCartComp />
            ) : (
              product.map((product, idx) => (
                <>
                  <ProductComp key={idx} product={product} />
                  <Hr />
                </>
              ))
            )}
          </Info>
          {qty >= 1 && <SummaryComp />}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
