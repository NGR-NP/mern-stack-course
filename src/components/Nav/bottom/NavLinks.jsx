import React from "react";
import "./css/NavLinks.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <nav role="navigation" className="navLinks">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
          <KeyboardArrowDownIcon fontSize="x-small" className="navLinkIcon" />
          <ul aria-label="submenu">
            <li>
              <Link to="mens">Mens</Link>
            </li>
            <li>
              <Link to="womens">Womens</Link>
            </li>
            <li>
              <Link to="accosseries">Accosseries</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
