import React from "react";
import Welcome from "../images/welcome.jpg";
import "../style/Home.css";
const Home = () => {
  return (
    <section className="homeSec">
      <div className="homeImgs centerADiv">
        <img src={Welcome} className="homeImg" alt="Welcome" />
      </div>
      <div className="homeText">
        <h2 className="homeTitle">Home Page</h2>
      </div>
    </section>
  );
};

export default Home;
