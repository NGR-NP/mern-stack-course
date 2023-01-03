import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
export const ApiUrl =
  "https://vrit-tech-mernstack-project-by-roll-1.up.railway.app/api";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

