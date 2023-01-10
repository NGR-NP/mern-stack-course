import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./Public.Routes";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import ProctedRoutes from "./Procted.Routes";
import Products from "../pages/Products";
const ROLE = {
  User: 100,
  Admin: 10,
};
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PublicRoutes />,
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
        element: <div>unauthorize</div>,
      },
    ],
  },
  {
    path: "/",
    element: <ProctedRoutes isAllowed={[ROLE.User]} />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <ProctedRoutes isAllowed={[ROLE.Admin]} />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/new",
        element: <div>add new product</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 page not found</div>,
  },
]);
