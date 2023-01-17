import styled from "styled-components";
import UsersList from "../new/users/UsersList";
const Section = styled.section`
  padding: 3rem 0;
  background: var(--bgRadiGradPink);
`;
const Admin = () => {
  return (
    <Section>
      <UsersList/>
    </Section>
  );
};

export default Admin;
