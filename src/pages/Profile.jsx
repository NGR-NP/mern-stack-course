import { useDispatch, useSelector } from "react-redux";
import {
  logOut,
  selectCurrentEmail,
  selectCurrentUserId,
  selectCurrentUsername,
} from "../new/auth/authSlice";

const Profile = () => {
  const id = useSelector(selectCurrentUserId);
  const username = useSelector(selectCurrentUsername);
  const email = useSelector(selectCurrentEmail);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="centerADiv">
        <h1>PROFILE</h1>
        <div>
          <p>id:{id}</p>
          <p>username: {username}</p>
          <p>email: {email}</p>
        </div>
        <button onClick={() => dispatch(logOut())}>logout</button>
      </div>
    </section>
  );
};

export default Profile;
