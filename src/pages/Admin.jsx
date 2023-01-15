import styled from "styled-components";
import GoToHome from "../components/Icons/GoToHome";
import UsersList from "../new/users/UsersList";
const Section = styled.section`
  padding: 3rem 0;
  background: var(--bgRadiGradPink);
`;
const Admin = () => {
  return (
    <Section>
      <UsersList />
      <GoToHome />
    </Section>
  );
};

export default Admin;
