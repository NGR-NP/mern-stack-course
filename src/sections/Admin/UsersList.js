import { useGetUsersQuery } from "../../new/users/userApiSlice";
import LoadingGif from "../../components/loading/LoadingGif";
import NoResponse from "../../components/server/NoResponse";
import {
  Section,
  Cont,
  Table,
  Title,
  Tr,
  Th,
  Tbody,
  Thead,
  Td,
  Role,
} from "./style/userlistStyle";

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
                <Th>S.N</Th>
                <Th>Username</Th>
                <Th>email</Th>
                <Th>role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user, i) => (
                <Tr key={user._id}>
                  <Td>{i + 1}</Td>
                  <Td title="username">{user.username}</Td>
                  <Td title="email">{user.email}</Td>
                  <Td>
                    <Role
                      title="Role"
                      className={user.role.indexOf(10) !== -1 ? "red" : "green"}
                      key={user._id}
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
    content = <NoResponse message={error.data?.mesage} />;
  }
  return content;
};

export default UsersList;
