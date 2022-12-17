import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import "./css/NavUserComp.css";
import { Link } from "react-router-dom";
const NavUserComp = () => {
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
          <Link to="/login" className="navUserCompLink" >
            <Person3OutlinedIcon
              color="action"
              fontSize="medium"
              titleAccess="Account"
            />
            <div>Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavUserComp;
