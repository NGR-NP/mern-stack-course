import { useState, useEffect } from "react";
import axios from "../../api/axios";
import styled from "styled-components";
const USER_ROUTES = "/users";

const Section = styled.section`
  background: var(--bgLineGradBlue);
  padding: 25px;
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
const Msg = styled.p`
  padding: 10px;
  background: #dadada;
  color: #505050;
  text-align: center;
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const res = await axios.get(USER_ROUTES);
        console.log(res.data);
        isMounted && setUsers(res.data);
      } catch (err) {
        console.error(err.response.data.message);
        setErrMsg(err.response.data.message);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <Section>
      <Title>USERS</Title>
      {users?.length ? (
        <Table>
          <TR>
            <TH>S.N</TH>
            <TH>Username</TH>
        <TH>email</TH>
          <TH>role</TH>
        </TR>
        {users.map((user, i) =>
            <TR key={i}>
              <TH>{user?.username}</TH>
              <TH>{user.email}</TH>
              <TH>{user.role}</TH>
            </TR>
          )}
        </Table>
      ) : (
        <Msg>{errMsg}</Msg>
      )}
    </Section>
  );
};
export default AllUsers;
