import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import "./css/NavUserComp.css";
const NavUserComp = () => {
  return (
    <div className="navUserComp">
      <div className="navUserCompMain">
        <div className="navUserCompSec">
          <FavoriteBorderIcon color="action" fontSize="small" titleAccess="Your Wishlist" />
          <span>Wishlist</span>
        </div>
        <div className="navUserCompSec">
          <ShoppingCartOutlinedIcon color="action" fontSize="small" titleAccess="Shopping Cart" />
          <span>Cart</span>
        </div>
        <div className="navUserCompSec">
          <Person3OutlinedIcon color="action" fontSize="small" titleAccess="Account" />
          <span>Account</span>
        </div>
      </div>
    </div>
  );
};

export default NavUserComp;
