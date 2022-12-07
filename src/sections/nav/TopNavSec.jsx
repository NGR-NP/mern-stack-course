import React from "react";
import AllCategories from "../../components/Nav/AllCategories";
import Locations from "../../components/Nav/Locations";
import LogoComp from "../../components/Nav/LogoComp";
import NavUserComp from "../../components/Nav/NavUserComp";
import Search from "../../components/Nav/Search";
import "./css/TopNavSec.css";
const TopNavSec = () => {
  return (
    <section className="navTopSec">
      <div className="navTop navLogo">
        <LogoComp />
      </div>
      <div className="navTop">
        <AllCategories/>
      </div>
      <div className="navTop">
        <Search />
      </div>
      <div className="navTop">
        <Locations />
      </div>
      <div className="navTop">
        <NavUserComp />
      </div>
    </section>
  );
};

export default TopNavSec;
