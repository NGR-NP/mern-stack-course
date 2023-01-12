import { Outlet } from "react-router-dom";
import Nav from "../../sections/nav/Nav";

const NavbarWrapper = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default NavbarWrapper;
