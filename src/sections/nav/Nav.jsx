import React from "react";
import BottomNavSec from "./BottomNavSec";
import TopNavSec from "./TopNavSec";
import './css/Nav.css'
const Nav = () => {
  return (
    <nav className="navMain">
      <TopNavSec />
      <BottomNavSec />
    </nav>
  );
};

export default Nav;
