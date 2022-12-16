import React from "react";
import BottomNavSec from "./BottomNavSec";
import TopNavSec from "./TopNavSec";
import './css/Nav.css'
const Nav = () => {
  return (
    <section className="navMain">
      <TopNavSec />
      <div className="navMainLine"/>
      <BottomNavSec />
    </section>
  );
};

export default Nav;
