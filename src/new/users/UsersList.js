import styled from "styled-components";
import { useGetUsersQuery } from "./userApiSlice";

const Section = styled.section`
  margin: 22px;
  padding: 25px;
  box-shadow: var(--boxShadow);
  border-radius: 9px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  margin: 0 1px 10px 1px;
`;
const Table = styled.table`
  border: 1px solid;
`;

const TR = styled.tr``;
const TH = styled.th`
  ${TR} , & {
    border: 1px solid;
    padding: 10px 20px;
  }
`;
const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  let content;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    content = (
      <Section>
        <Title>users list</Title>
        <Table>
          <thead>
            <TR>
              <TH>id</TH>
              <TH>Username</TH>
              <TH>email</TH>
              <TH>role</TH>
            </TR>
          </thead>
          <tbody>
            {users.map((user) => (
              <TR key={user._id}>
                <TH>{user?._id}</TH>
                <TH>{user.username}</TH>
                <TH>{user.email}</TH>
                <TH>{user.role}</TH>
              </TR>
            ))}
          </tbody>
        </Table>
      </Section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error.originalStatus)}</p>;
  }
  return content;
};

export default UsersList;
