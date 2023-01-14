import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useRefreshToken from "../../hooks/useRefreshToken";
const AllUsers = () => {
  const [users, setUsers] = useState();
  const refresh = useRefreshToken;
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        const userInfo = response.data.map((user) => {
          return {
            username: user.username,
            email: user.email,
            role: user.role,
          };
        });
        console.log(response.data);
        isMounted && setUsers(userInfo);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>users list</h2>
      {users?.length ? (
        <>
          {users.map((user, i) => (
            <ul key={i}>
              <li>{user?.username}</li>
              <li>{user?.email}</li>
              <li>{user?.role}</li>
            </ul>
          ))}
        </>
      ) : (
        <p>no users to display</p>
      )}
      <button onClick={() => refresh()}>refresh</button>
    </article>
  );
};
export default AllUsers;
// import { useState, useEffect } from "react";
// import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import styled from "styled-components";
// import { useNavigate, useLocation } from "react-router-dom";

// const USER_ROUTES = "/users";

// const Section = styled.section`
//   background: var(--bgLineGradBlue);
//   padding: 25px;
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   margin: 0 1px 10px 1px;
// `;
// const Table = styled.table`
//   border: 1px solid;
// `;

// const TR = styled.tr``;
// const TH = styled.th`
//   ${TR} , & {
//     border: 1px solid;
//     padding: 10px 20px;
//   }
// `;
// const Msg = styled.p`
//   padding: 10px;
//   background: #dadada;
//   color: #505050;
//   text-align: center;
// `;

// const AllUsers = () => {
//   const { axiosPrivate } = useAxiosPrivate();
//   const [users, setUsers] = useState();
//   const [errMsg, setErrMsg] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     let isMounted = true;
//     const controller = new AbortController();

//     const getUsers = async () => {
//       try {
//         const response = await axiosPrivate.get(USER_ROUTES, {
//           signal: controller.signal,
//         });
//         console.log(response.data);
//         isMounted && setUsers(response.data);
//       } catch (err) {
//         console.error(err);
//         setErrMsg(err);
//         navigate("/login", { state: { from: location }, replace: true });
//       }
//     };

//     getUsers();

//     return () => {
//       isMounted = false;
//       controller.abort();
//     };
//   }, [axiosPrivate]);

//   return (
//     <Section>
//       <Title>USERS</Title>
//       {users?.length ? (
//         <Table>
//           <thead>
//             <TR>
//               <TH>S.N</TH>
//               <TH>Username</TH>
//               <TH>email</TH>
//               <TH>role</TH>
//             </TR>
//           </thead>
//           {users.map((user, i) => (
//             <tbody>
//               <TR key={i}>
//                 <TH>{user?.username}</TH>
//                 <TH>{user.email}</TH>
//                 <TH>{user.role}</TH>
//               </TR>
//             </tbody>
//           ))}
//         </Table>
//       ) : (
//         <p>no user to display</p>
//       )}
//       <Msg>{errMsg}</Msg>
//     </Section>
//   );
// };
// export default AllUsers;
