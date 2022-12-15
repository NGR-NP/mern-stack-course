import React from "react";
// import AllCategories from "../../components/Nav/AllCategories";
import Locations from "../../components/Nav/top/Locations";
import LogoComp from "../../components/Nav/top/LogoComp";
import NavUserComp from "../../components/Nav/top/NavUserComp";
import Search from "../../components/Nav/top/Search";
import "./css/TopNavSec.css";
const TopNavSec = () => {
  return (
    <section className="navSec">
      <div className="navTop navLogo">
        <LogoComp />
      </div>
      {/* <div className="navTop">
        <AllCategories/>
      </div> */}
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
