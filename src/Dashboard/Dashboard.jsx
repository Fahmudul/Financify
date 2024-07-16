import React, { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import AdminBar from "../Pages/Admin/AdminBar";


const Dashborad = () => {
  const axiosRequest = useAxios();
 
  return (
    <div className="min-h-screen bg-[#5c5e79] px-5">
      <AdminBar />
    </div>
  );
};

export default Dashborad;
