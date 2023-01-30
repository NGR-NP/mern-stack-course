import "./css/NavUserComp.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectCurrentUsername } from "../../../new/auth/authSlice";
import { AccountCircle } from "@mui/icons-material";
import { selectCurrentQty } from "../../../new/cart/cartSlice";

const LUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    text-transform: capitalize;
  }
`;
const CartCont = styled.div`
  position: relative;
  
  a {
    display: flex;
  }
`;
const Count = styled.div`
  font-size: 0.956rem;
  position: absolute;
  top: -14px;
  left: 7px;
  background-color: #ff63cf;
  border-radius: 50px;
  box-shadow: 0px 2px 4px #b6b6b659;
  margin: 0 !important;
  font-family: auto !important;
  display: flex;
  align-items: center;
`;
const Num = styled.div`
  font-family: var(--font4) !important;
  margin: 0px !important;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .num {
    font-family: var(--font3);
    margin: 0 !important;
    color: white !important;
    padding: 0px;
    position: absolute;
  }
`;
const NavUserComp = () => {
  const username = useSelector(selectCurrentUsername);
  const qty = useSelector(selectCurrentQty);
  return (
    <div className="navUserComp">
      <div className="navUserCompMain">
        <div className="navUserCompSec">
          <FavoriteBorderIcon
            color="action"
            fontSize="medium"
            titleAccess="Your Wishlist"
          />
          <div>Wishlist</div>
        </div>
        <CartCont className="navUserCompSec">
          <Link to="/cart">
            <Count>
              <Num>
                <div className="num">{qty}</div>
              </Num>
            </Count>
            <ShoppingCartOutlinedIcon
              color="action"
              fontSize="medium"
              titleAccess="Shopping Cart"
            />
            <div>Cart</div>
          </Link>
        </CartCont>

        <div className="navUserCompSec">
          {username ? (
            <Link to="/profile">
              <LUser>
                <AccountCircle />
                <p>{username}</p>
              </LUser>
            </Link>
          ) : (
            <Link to="/register" className="navUserCompLink">
              <Person3OutlinedIcon
                color="action"
                fontSize="medium"
                titleAccess="Register"
              />
              <div>Register</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavUserComp;
