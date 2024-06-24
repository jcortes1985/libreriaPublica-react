import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const user = UseAuth();
  if (!user.token) return //jcr//<Navigate to="/NavBar" />;
  return //jcr//<Outlet />;
};

export default PrivateRoute;