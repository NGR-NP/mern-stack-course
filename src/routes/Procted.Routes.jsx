import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProctedRoutes = ({ isAllowed }) => {
  const { auth } = useAuth();
  const location = useLocation();
  return (
  auth?.role?.find((roles) => isAllowed?.includes(roles)) ?
    <Outlet />
   : auth.username ?
    <Navigate to="/unauthorize" state={{ from: location }} replace />
   :
    	<Navigate to="/login" state={{ from: location }} replace />
  )
};

export default ProctedRoutes;
