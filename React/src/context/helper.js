import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Outlet /> : <Navigate to='/login' />;
};

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? <Navigate to="/" /> : <Outlet />;
};

