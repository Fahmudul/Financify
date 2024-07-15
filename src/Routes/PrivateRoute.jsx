import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  // Checking user logged in
  const isLoggedIn = true;
  const phone = localStorage.getItem("user-phone");
  if (phone && isLoggedIn) {
    return <Dashboard />;
  }
  return Navigate("/login-signup", { replace: true });
};

export default PrivateRoute;
