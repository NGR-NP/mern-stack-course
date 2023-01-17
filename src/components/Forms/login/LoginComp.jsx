import { useEffect, useRef, useState } from "react";
import CustomToast from "../../Tost/CustomToast";
import ErrMsg from "../ErrMsg";
import Info from "../Info";
import Password from "./inputs/Password";
import Username from "./inputs/username";
import axios from "../../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const LOGIN_URL = "/auth/login";
const LoginComp = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(LOGIN_URL, { username, password });
      const resp = res?.data;
      const accessToken = resp?.accessToken;
      setAuth({ username, accessToken });
      setSuccess(true);
      setUsername("");
      setPassword("");
      setToastMessage(res?.data?.message);
      setTimeout(() => {
        navigate(from, {
          replace: true,
        });
      }, 2000);
    } catch (err) {
      const resp = err?.response;
      if (!resp) {
        setErrMsg("server is not responding");
      } else if (resp?.data?.status === 400) {
        setErrMsg(resp.data?.message);
      } else if (resp) {
        setErrMsg(resp.message);
      } else {
        setErrMsg("Login failed! 😔");
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
            message={"Don't have an account? Let's"}
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
