import { Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  logOut,
  selectCurrentEmail,
  selectCurrentUserId,
  selectCurrentUsername,
} from "../new/auth/authSlice";

const Main = styled.div``;
const Cont = styled.div`
  flex-direction: column;
`;
const UsrDtlCont = styled.div`
  display: grid;
  background: var(--bgRadiGradPink);
  padding: 20px;
  color: #727272;
  --darkreader-inline-color: #a0988b;
  box-shadow: var(--boxShadow);

`;
const UsrDtl = styled.p`
  padding: 10px 15px;
  box-shadow: var(--boxShadow);
`;
const Button = styled.button`
  padding: 10px 20px;
  margin: 16px;
  background: var(--lightBlueBackground);
  outline: navajowhite;
  border: navajowhite;
  border-radius: 6px;
  box-shadow: var(--boxShadow);
  display: flex;
  align-items: center;
  gap: 9px;
`;
const Profile = () => {
  const id = useSelector(selectCurrentUserId);
  const username = useSelector(selectCurrentUsername);
  const email = useSelector(selectCurrentEmail);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  
  return (
    <Main>
      <Cont className="centerADiv">
        {id ? (
          <>
            <h1>PROFILE</h1>
            <UsrDtlCont>
              <UsrDtl>
                <b>id: </b>
                {id || " data not found"}
              </UsrDtl>
              <UsrDtl>
                <b>username: </b> {username || " data not found"}
              </UsrDtl>
              <UsrDtl>
                <b>email: </b> {email || " data not found"}
              </UsrDtl>
            </UsrDtlCont>
            <Button onClick={handleClick}>logout <Logout fontSize="small"/></Button>
          </>
        ) : (
          <>
            <h1>Not loggedin</h1>
            <div>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </>
        )}
      </Cont>
    </Main>
  );
};

export default Profile;
