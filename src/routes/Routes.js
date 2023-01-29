import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Admin from "../pages/Admin/Admin";
import Profile from "../pages/Profile";
import LoginPage from "../pages/login";
import RequireAuth from "../new/auth/RequireAuth";
import Unauthorized from "../components/access/unauthorized";
import GetProductsByCatg from "../new/products/GetProductsByCatg";
import SingleProduct from "../pages/SingleProduct";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Layout from "../new/components/Layout";
const ROLE = {
  ADMIN: 10,
  USER: 100,
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
            path: "/shop/:catg",
            element: <GetProductsByCatg />,
          },
          {
            path: "/shop",
            element: <GetProductsByCatg />,
          },
          {
            path: "/old/shop/:catg",
            element: <Products />,
          },
          {
            path: "/old/shop",
            element: <Products />,
          },
          {
            path: "/product/:id",
            element: <SingleProduct />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/unauthorize",
            element: <Unauthorized />,
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
            path: "/new",
            element: <div>add new product</div>,
          },
        ],
      },
      {
        path: "/",
        element: <RequireAuth isAllowed={[ROLE.USER]} />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "*",
        element: <div className="centerADiv">404 page not found</div>,
      },
    ],
  },
]);
