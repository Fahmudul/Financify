import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Checking user logged in
  const isLoggedIn = true;
  // setInterval(() => {
  //   // console.log("hello");
  // }, 5000);
  const phone = localStorage.getItem("user-details");
  if (phone && isLoggedIn) {
    return children;
  }
  // console.log('not logged in')
  return <Navigate to="/" replace />;
};

export default PrivateRoute;
