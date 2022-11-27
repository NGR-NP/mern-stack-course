import React from "react";
import Welcome from '../../image/welcome.jpg'
const Main = () => {
  return (
    <main className="homeMain">
      <section className="homeSec">
        <h3 className="homeSecH3"><span>WELCOME</span><span>to</span>Home Page</h3>
        <img src={Welcome} alt="Welcome" />
      </section>
    </main>
  );
};

export default Main;
