import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import "./css/NavUserComp.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../../../new/auth/authSlice";
import { AccountCircle } from "@mui/icons-material";
import styled from "styled-components";
const LUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    text-transform: capitalize;
  }
`;
const NavUserComp = () => {
  const username = useSelector(selectCurrentUsername);
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
        <div className="navUserCompSec">
          <ShoppingCartOutlinedIcon
            color="action"
            fontSize="medium"
            titleAccess="Shopping Cart"
          />
          <div>Cart</div>
        </div>

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
              <Person3OutlinedIcon color="action"
            fontSize="medium"
            titleAccess="Register"/>
              <div>Register</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavUserComp;
