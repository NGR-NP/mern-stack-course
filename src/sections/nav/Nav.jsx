import React from "react";
import BottomNavSec from "./BottomNavSec";
import TopNavSec from "./TopNavSec";
import './css/Nav.css'
const Nav = () => {
  return (
    <section className="navMain">
      <TopNavSec />
      <span className="navMainLine"/>
      <BottomNavSec />
    </section>
  );
};

export default Nav;
