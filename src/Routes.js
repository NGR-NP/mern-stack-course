import { createBrowserRouter } from "react-router-dom";
import NavbarWrapper from "./components/wrapper/NavbarWrapper";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
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
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
