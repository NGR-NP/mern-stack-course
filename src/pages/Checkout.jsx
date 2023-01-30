import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserId } from "../new/auth/authSlice";
import { useOrderMutation } from "../new/orders/orderApiSlice";
import Circle from "../components/loading/Circle";
import {
  selectCurrentProduct,
  selectCurrenttotal,
} from "../new/cart/cartSlice";
import { showToastMessage } from "../new/custonToast/toastSlice";
import { useRef } from "react";
const Checkout = () => {
  const product = useSelector(selectCurrentProduct);
  const id = useSelector(selectCurrentUserId);
  const total = useSelector(selectCurrenttotal);
  const dispatch = useDispatch();
  const [order, { isLoading }] = useOrderMutation();
  const addressRef = useRef(null);
  const numberRef = useRef(null);
  console.log(product);
  const ordersData = [];
  product.forEach((product) => {
    ordersData.push({
      productId: product._id,
      color: product.color,
      size: product.size,
    });
  });
  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const data = await order({
        id: id,
        products: ordersData,
        amount: total,
        address: addressRef.current.value,
        number: numberRef.current.value,
      });
      dispatch(
        showToastMessage({
          message: "your order is submited successfully",
          type: "success",
        })
      );
      console.log(data);
    } catch (err) {
      dispatch(
        showToastMessage({
          message: "your order Failed!",
          type: "error",
        })
      );
      console.log(err);
    }
  };
  return (
    <div>
      <div>CHECKOUT</div>
      <form onSubmit={handleOrder}>
        <div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="address"
              ref={addressRef}
            />
          </div>
          <div>
            <input type="tel" name="tel" placeholder="Number" ref={numberRef} />
          </div>
          <div className="centerADiv">
            <button className="loginBtn" disabled={isLoading ? true : false}>
              {isLoading ? <Circle top={"19%"} right={"45%"} /> : `Checkout`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
