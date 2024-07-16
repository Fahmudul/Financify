import React from "react";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const isLoggedIn = true;
  const checkAdmin = JSON.parse(localStorage.getItem("user-details"));
  console.log(checkAdmin);
  // const phone = localStorage.getItem("user-details").phone;
  // console.log(checkAdmin, phone);
  if (checkAdmin.phone && isLoggedIn && checkAdmin.role === "Admin") {
    // console.log("logged in");
    return children;
  }
  return <Navigate to="/" replace />;
};

export default AdminRoute;
