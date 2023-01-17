import styled from "styled-components";
import { useGetUsersQuery } from "./userApiSlice";
import LoadingGif from "../../components/loading/LoadingGif";

const Section = styled.section`
  margin: 0 22px 22px;
  padding: 25px;
  box-shadow: var(--boxShadow);
  border-radius: calc(22px - 9px);
`;
const Cont = styled.div`
  box-shadow: var(--boxShadow);
  display: grid;
  scroll-behavior: smooth;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  font-family: Mukta, sans-serif;
  color: #4f546c;
  font-size: 0.9rem;
  border-radius: calc(22px - 9px);
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin: 0 1px 25px 1px;
  font-family: var(--font3);
  box-shadow: 0 5px 10px rgb(226 209 226);
  padding: 3px 38px;
  border-radius: 50px;
  text-align: center;
  background-image: radial-gradient(
    circle,
    rgb(103 217 255) 0%,
    rgb(249 126 255) 100%
  );
  text-transform: capitalize;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0 5px 10px #e1e5ee;
  background-color: #f6f0f09e;
  text-align: left;
  overflow: hidden;
  margin: 22px;
  border-radius: calc(22px - 9px);
`;
const Thead = styled.thead`
  box-shadow: 0 5px 10px #e1e5ee;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr`
  background-color: ${(props) => (props.color ? "rgb(213 0 0 / 68%)" : "")};
  color: ${(props) => (props.color ? "white" : "")};
  :nth-child(even) {
    background-color: #f4f6fb;
  }
`;
const Th = styled.th`
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
  font-weight: 900;
`;
const Td = styled.td`
  padding: 1rem 2rem;
  > .red {
    background: #ffcdd2;
    color: #c62828;
  }
  > .green {
    background-color: #c8e6c9;
    color: #388e3c;
  }
`;
const Role = styled.p`
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;
  text-align: center;
  width: 5rem;
`;
const UsersList = () => {
  const roleMap = {
    10: "ADMIN",
    100: "USER",
  };
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  let content;
  if (isLoading) {
    content = <LoadingGif />;
  } else if (isSuccess) {
    content = (
      <Section>
        <Title>users list</Title>
        <Cont>
          <Table>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>Username</Th>
                <Th>email</Th>
                <Th>role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user?._id}>
                  <Td>{user._id}</Td>
                  <Td>{user.username}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Role
                      className={user.role.indexOf(10) !== -1 ? "red" : "green"}
                      key={user?._id}
                    >
                      {user.role
                        .filter(
                          (role) =>
                            !(role === 100 && user.role.indexOf(10) !== -1)
                        )
                        .map((role) => roleMap[role] || "N/A")}
                    </Role>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Cont>
      </Section>
    );
  } else if (isError) {
    content = <p>{error.data.message}</p>;
  }
  return content;
};

export default UsersList;
