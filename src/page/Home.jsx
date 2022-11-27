import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/home/Header";
import Main from "../components/home/Main";
import "../style/home.css";
const Home = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Main />
    </>
  );
};

export default Home;
