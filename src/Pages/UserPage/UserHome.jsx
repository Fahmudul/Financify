import React, { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import useAxios from "../../Hooks/useAxios";
import { BsSend } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const [usersDetails, setUsersDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // Retrive user data from server
    const phone = JSON.parse(localStorage.getItem("user-details")).phone;
    const userData = async () => {
      const res = await axiosSecure(`/user-phone?phone=${phone}`);
      const data = res.data;
      setUsersDetails(data);
    };
    userData();
  }, [axiosSecure]);
  return (
    <div className="mt-5 text-[#5c5e79]">
      {/* Balance Card */}
      <div className="w-full min-h-[190px] border rounded-2xl bg-[#D3D3D3] p-5 shadow-xl">
        <div className="flex justify-between mb-4">
          <p className="text-2xl">
            Welcome back, <br />
            <span className="text-[#2a2e63]">
              {usersDetails?.name?.toUpperCase()} ({usersDetails?.role})
            </span>
          </p>
          <IoMdNotificationsOutline className="text-3xl" />
        </div>
        <div className="">
          <h1 className="text-lg font-medium">Total Balance</h1>
        </div>
        <p className="text-4xl font-semibold mt-1">
          $ {usersDetails?.accountBalance}
        </p>

        <div className="mt-6 font-medium">
          <span>7/0% ($20%)</span>
          <button className="ml-3 font-semibold bg-white px-2 py-1  rounded-md shadow-lg relative active:scale-95 transition-all duration-300">
            Add Card
          </button>
        </div>
      </div>
      {/* Transfer Add Recieve */}
      <div className="w-full  flex rounded-2xl  mt-5 gap-2">
        <Link
          to="/dashboard/transfer"
          className={`${
            usersDetails?.role === "Agent"
              ? "hidden"
              : "active:scale-95 transition-all duration-300 shadow-xl w-[50%] min-h-[60px] hover:outline-1 text-black/70 text-2xl rounded-full bg-white/15 flex justify-start pl-3 gap-2 items-center"
          }`}
        >
          <span className=" p-2 rounded-full bg-white/60">
            <BsSend />
          </span>
          <span className="">Send Money</span>
        </Link>
        <button
          className={`${
            usersDetails?.role === "User"
              ? "hidden"
              : "active:scale-95 transition-all duration-300 shadow-xl w-[50%] min-h-[60px] hover:outline-1 text-black/70 text-2xl rounded-full bg-white/15 flex justify-start pl-3 gap-2 items-center"
          }`}
        >
          <span className=" p-2 rounded-full bg-white/60 ">
            {usersDetails?.role === "Agent" ? (
              <GoArrowDownLeft />
            ) : (
              <GrTransaction />
            )}
          </span>
          <span className="">
            {usersDetails?.role === "Agent" ? "Request" : ""}
          </span>
        </button>
        <button
          onClick={() => navigate("/dashboard/transfer")}
          className={
            usersDetails?.role === "User"
              ? "hidden"
              : "shadow-xl w-[50%] min-h-[60px] hover:outline-1 text-black/70 text-2xl rounded-full bg-white/15 flex justify-start pl-3 gap-2 items-center"
          }
        >
          <span className=" p-2 rounded-full bg-white/60 ">
            <MdArrowOutward />
          </span>
          <span className="">
            {usersDetails?.role === "Agent" ? "Transfer" : "Add Money"}
          </span>
        </button>
        <button
          // onClick={() => navigate("/dashboard/transfer")}
          className={`${
            usersDetails?.role === "Agent" ? "hidden" : ""
          } shadow-xl w-[50%] min-h-[60px] hover:outline-1 text-black/70 text-2xl rounded-full bg-white/15 flex justify-start pl-3 gap-2 items-center`}
        >
          <span className=" p-2 rounded-full bg-white/60 ">
            <IoMdAdd />
          </span>
          <span className="">Add Money</span>
        </button>
      </div>
    </div>
  );
};

export default UserHome;
