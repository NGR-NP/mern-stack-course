import React from "react";
import GoToHome from "../components/Icons/GoToHome";
import AllUsers from "../sections/Admin/AllUsers";
const Admin = () => {
  return (
    <section>
      <div className="centerADiv">
        <h1>ADMIN</h1>
      </div>
        <AllUsers/>
      <GoToHome />
    </section>
  );
};

export default Admin;
