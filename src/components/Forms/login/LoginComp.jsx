import { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import CustomToast from "../../Tost/CustomToast";
import ErrMsg from "../ErrMsg";
import Info from "../Info";
import Password from "./inputs/Password";
import Username from "./inputs/username";
import axios from "../../../api/axios";

const LOGIN_URL = "/auth/login";
const LoginComp = () => {
  const { setAuth } = useContext(AuthContext);

  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(LOGIN_URL, {username, password});
      console.log(res?.data);
      const accessToken = res?.data?.accessToken;
      const role = res?.data?.role;
      setAuth({ username, password, role, accessToken });
      setSuccess(true);
      setUsername("");
      setPassword("");
      setToastMessage(res.data.message);
    } catch (err) {
      if (err.response?.data?.status === 400) {
        setErrMsg(err.response?.data?.message);
      } else if (err.response?.data?.status === 401) {
        setErrMsg(err.response?.data?.message);
      } else {
        setErrMsg("Login Error 😔");
      }
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);
  return (
    <>
      {success ? (
        <CustomToast
          bgcolor={"5eda2fcf"}
          toastmessage={toastMessage || "success"}
        />
      ) : (
        <></>
      )}
      {errMsg ? <ErrMsg errMsg={errMsg} errRef={errRef} /> : <></>}
      <form onSubmit={handleSubmit} className="loginMain">
        <div>
          <div className="loginTitle">Login</div>
          <Info
            message={"Do not have account? Let's"}
            what={"Register"}
            where={"/register"}
          />
          <Username username={username} setUsername={setUsername} />
          <Password password={password} setPassword={setPassword} />
          <div className="centerADiv">
            <button className="loginBtn">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginComp;

/* <div className="infoCont">
  <p>Do not have an Account?</p>
  <Link to="/register">Register</Link>
</div> */
