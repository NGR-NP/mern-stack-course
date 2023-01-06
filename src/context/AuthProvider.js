import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Outlet />
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
