import React from "react";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const isLoggedIn = true;
  const checkAdmin = JSON.parse(localStorage.getItem("user-details"));

  if (checkAdmin.phone && isLoggedIn && checkAdmin.role === "Admin") {
   
    return children;
  }
  return <Navigate to="/" replace />;
};

export default AdminRoute;
