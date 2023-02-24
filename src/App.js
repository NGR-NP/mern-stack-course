import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import ContentLoadding from "./sections/contentLoading";

function App() {
  return
  (
    <>
      <ContentLoadding />
      <RouterProvider router={router} />;
    </>
  )
}

export default App;
