import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";

const VisitorPrivateRoute = ({ children }) => {
  const axiosRequest = useAxios();
  const isLoggedIn = true;
  const phone = localStorage.getItem("user-details");
  if (phone && isLoggedIn) {
    console.log("logged in");
    return children;
  }
  return <Navigate to="/" replace />;
};

export default VisitorPrivateRoute;
