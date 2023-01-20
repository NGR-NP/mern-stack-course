import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

import ErrMsg from "../../components/Forms/ErrMsg";
import Username from "../../components/Forms/login/inputs/username";
import Password from "../../components/Forms/login/inputs/Password";
import Info from "../../components/Forms/Info";
import Circle from "../../components/loading/Circle";

const Login = () => {
  const navigate = useNavigate();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setErrMsg("");
    setShowToast(false);
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData, username }));
      setUsername("");
      setPassword("");
      navigate(from, {
        replace: true,
      });
    } catch (err) {
      const resp = err?.data;
      if (!resp) {
        setShowToast(true);
        setErrMsg("server is not responding");
      } else if (resp?.status === 400) {
        setShowToast(true);
        setErrMsg(resp?.message);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else if (resp) {
        setShowToast(true);
        setErrMsg(resp.message);
      } else {
        setShowToast(true);
        setErrMsg("Login failed! 😔");
      }
    }
  };

  const LoginForm = (
    <form onSubmit={handleSubmit} className="loginMain">
      {showToast ? <ErrMsg errMsg={errMsg} errRef={errRef} /> : <></>}
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
          <button className="loginBtn" disabled={isLoading ? true : false}>
            {isLoading ? <Circle top={"19%"} right={"45%"} /> : `Login`}
          </button>
        </div>
      </div>
    </form>
  );

  return LoginForm;
};

export default Login;
