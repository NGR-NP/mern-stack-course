import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentRole, selectCurrentToken } from "./authSlice";
import NavLayout from "../../layout/NavLayout";

const RequireAuth = ({ isAllowed }) => {
  console.log("require auth rerender");
  const token = useSelector(selectCurrentToken);
  const role = useSelector(selectCurrentRole);
  const location = useLocation();

  return role?.find((roles) => isAllowed?.includes(roles)) ? (
    <NavLayout />
  ) : token ? (
    <Navigate to="/unauthorize" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;



// console.log("require auth rerender");
// const location = useLocation();
// // const role = useSelector(selectCurrentRole);

// const [role, setRole] = useState([]);
// const token = useSelector(selectCurrentToken);

// console.log(token);
// useEffect(() => {
//   const decodeJwt = () => {
//     if (token) {
//       const decode = jwtDecode(token);
//       console.log(decode);
//       const passrole = decode.role;
//       console.log(passrole)
//       setRole(passrole);
//       console.log(role)
//     }
//   };
//   decodeJwt();
// }, [token]);