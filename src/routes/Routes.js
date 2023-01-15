import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./NavLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import LoginPage from "../pages/login";
import RequireAuth from "../new/auth/RequireAuth";
import Unauthorized from "../components/access/unauthorized";
const ROLE = {
  ADMIN: 10,
  USER: 100,
};
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <div>single product</div>,
      },
      {
        path: "/cart",
        element: <div>cart</div>,
      },
      {
        path: "/unauthorize",
        element: <Unauthorized/>,
      },
    ],
  },

  {
    path: "/",
    element: <RequireAuth isAllowed={[ROLE.ADMIN]} />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/new",
        element: <div>add new product</div>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <RequireAuth isAllowed={[ROLE.USER]} />,
    children: [
      {
        path: "/new",
        element: <div>add new product</div>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 page not found</div>,
  },
]);
