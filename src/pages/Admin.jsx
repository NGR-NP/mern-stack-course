import styled from "styled-components";
import GoToHome from "../components/Icons/GoToHome";
import UsersList from "../new/users/UsersList";
const Section = styled.section`
  height: 80vh;
  background: var(--bgRadiGradPink);
`;
const Admin = () => {
  return (
    <Section>
      <div className="centerADiv">
        <h1>ADMIN</h1>
      </div>
      <UsersList />
      <GoToHome />
    </Section>
  );
};

export default Admin;
