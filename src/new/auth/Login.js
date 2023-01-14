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

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ username, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData, username }));
      setUsername("");
      setPassword("");
      navigate(from, {
        replace: true,
      });
    } catch (err) {
      const resp = err?.response;
      console.log(err);
      if (!resp) {
        setErrMsg("server is not responding");
      } else if (resp?.data?.status === 400) {
        setErrMsg(resp.data?.message);
      } else if (resp?.data) {
        setErrMsg(resp.data.message);
      } else {
        setErrMsg("Login failed! 😔");
      }
    }
  };

  const LoginForm = (
    <form onSubmit={handleSubmit} className="loginMain">
      {errMsg ? <ErrMsg errMsg={errMsg} errRef={errRef} /> : <></>}
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
          <button className="loginBtn">
            {isLoading ? <Circle /> : `Login` }
          </button>
        </div>
      </div>
    </form>
  );

  return LoginForm;
};

export default Login;
