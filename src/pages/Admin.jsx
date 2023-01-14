import GoToHome from "../components/Icons/GoToHome";
import UsersList from "../new/users/UsersList";
const Admin = () => {
  return (
    <section>
      <div className="centerADiv">
        <h1>ADMIN</h1>
      </div>
      <UsersList />
      <GoToHome />
    </section>
  );
};

export default Admin;
