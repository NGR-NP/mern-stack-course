import React from "react";
import "./css/NavLinks.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <nav role="navigation" className="navLinks">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
          <KeyboardArrowDownIcon fontSize="x-small" className="navLinkIcon" />
          <ul aria-label="submenu">
            <li>
              <NavLink to="/shop/mens">Mens</NavLink>
            </li>
            <li>
              <NavLink to="/shop/womens">Womens</NavLink>
            </li>
            <li>
              <NavLink to="/shop/accosseries">Accosseries</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
