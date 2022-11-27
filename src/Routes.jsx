import { createBrowserRouter } from "react-router-dom";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Todo from "./page/Todo";
import Lost from "./page/Lost";
const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Lost />,
    element: <Home />,
    
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default Routes;
