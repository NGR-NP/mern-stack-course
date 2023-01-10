import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../sections/nav/Nav";

const PublicRoutes = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default PublicRoutes;
