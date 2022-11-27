import React from "react";
import Header from "../components/home/Header";
import "../style/lost.css";
const Lost = () => {
  return (
    <>
      <section className="lostSec">
        <div>
          <Header />
        </div>
        <div className="lostComp">
          <div className="lostTitle">
            <h3>Are you Lost?</h3>
          </div>
          <div className="lostDesc">
            <p>Let's go</p>
          </div>
          <div className="lostBtn">
            <button>Back</button>
            <button>Home Page</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lost;
