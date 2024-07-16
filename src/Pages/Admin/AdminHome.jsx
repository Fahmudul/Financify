import React, { useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Admin.css";
import useAxios from "../../Hooks/useAxios";
const AdminHome = () => {
  const axiosRequest = useAxios();
  useEffect(() => {
    // Retrive user data from server
    const userData = async () => {
      const res = await axiosRequest(
        `/user-phone?phone=${localStorage.getItem("user-phone")}`
      );
      const data = res.data;
      console.log(data);
    };
    userData();
  }, [axiosRequest]);
  return (
    <div className="mt-5 text-[#5c5e79]">
      {/* Balance Card */}
      <div className="w-full min-h-[190px] border rounded-2xl bg-[#D3D3D3] p-5">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">Total Balance</h1>
          <IoMdNotificationsOutline className="text-3xl" />
        </div>
        <p className="text-4xl font-semibold mt-1">$ 12000</p>

        <div className="mt-6 font-medium">
          <span>7/0% ($20%)</span>
          <button className="ml-3 font-semibold bg-white px-2 py-1  rounded-md shadow-lg relative active:scale-95 transition-all duration-300">
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
