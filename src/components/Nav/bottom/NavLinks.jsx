import React from "react";
import "./css/NavLinks.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const NavLinks = () => {
  return (
    <nav role="navigation" className="navLinks">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Shop</a>
          <KeyboardArrowDownIcon fontSize="x-small" className="navLinkIcon" />
          <ul aria-label="submenu">
            <li>
              <a href="/">Mens</a>
            </li>
            <li>
              <a href="/">Womens</a>
            </li>
            <li>
              <a href="/">Accosseries</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Blog</a>
          <KeyboardArrowDownIcon fontSize="x-small" className="navLinkIcon" />
          <ul aria-label="submenu">
            <li>
              <a href="/">Blog 1</a>
            </li>
            <li>
              <a href="/">Blog 2</a>
            </li>
            <li>
              <a href="/">Blog 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Our Team</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
