import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
}

export default App;
