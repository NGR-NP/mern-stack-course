import React from "react";
import BrouseAllCategories from "../../components/Nav/bottom/BrowseAllCategories";
import ContactNumber from "../../components/Nav/bottom/ContactNumber";
import NavLinks from "../../components/Nav/bottom/NavLinks";
import SocialMedia from "../../components/Nav/bottom/SocialMedia";

import "./css/BottomNavSec.css";
const BottomNavSec = () => {
  return (
    <section className="navSec">
      <div className="navBottom">
        <BrouseAllCategories />
      </div>
      <div className="navBottom">
        <NavLinks />
      </div>
      <div className="navBottom">
        <SocialMedia/>
      </div>
      <div className="navBottom">
        <ContactNumber/>
      </div>
    </section>
  );
};

export default BottomNavSec;
