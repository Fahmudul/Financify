import React, { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import AdminBar from "../Pages/Admin/AdminBar";
import useAdmin from "../Hooks/useAdmin";
import UserPage from "../Pages/UserPage/UserPage";

const Dashborad = () => {
  const axiosRequest = useAxios();
  const checkAdmin = useAdmin();
  const role = JSON.parse(localStorage.getItem("user-details")).role;
  // console.log(checkAdmin);
  if (role !== "Admin") {
    return (
      <div className="min-h-screen bg-[#5c5e79] px-5">
        <UserPage />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#5c5e79] px-5">
      <AdminBar />
    </div>
  );
};

export default Dashborad;
