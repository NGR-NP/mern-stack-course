import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../layout/NavLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import LoginPage from "../pages/login";
import RequireAuth from "../new/auth/RequireAuth";
import Unauthorized from "../components/access/unauthorized";
import GetProductsByCatg from "../new/products/GetProductsByCatg";
import ToastLayout from "../layout/ToastLayout";
import SingleProduct from "../pages/SingleProduct";
import Products from "../pages/Products";
const ROLE = {
  ADMIN: 10,
  USER: 100,
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ToastLayout />,
    children: [
      {
        path: "/login",
        element:  <LoginPage />,
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
          },{
            path: "/shop",
            element: <GetProductsByCatg />,
          },
          {
            path: "/products/:catg",
            element: <Products/>,
          },{
            path: "/products",
            element: <Products/>,
          },
          {
            path: "/product/:id",
            element: <SingleProduct />,
          },
          {
            path: "/cart",
            element: <div>cart</div>,
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
        element: <div>404 page not found</div>,
      },
    ],
  },
]);
