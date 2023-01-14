import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavLayout from "./NavLayout";
const ProctedRoutes = ({ isAllowed }) => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.role?.find((roles) => isAllowed?.includes(roles)) ? (
    <NavLayout />
  ) : auth.username ? (
    <Navigate to="/unauthorize" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProctedRoutes;
