import { IoMdNotificationsOutline } from "react-icons/io";
import useAxios from "../../Hooks/useAxios";
import { BsSend } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { GoArrowDownLeft } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import Transaction from "../Common/Transaction";
import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const phone = JSON.parse(localStorage.getItem("user-details")).phone;

  const navigate = useNavigate();
  const { data: UserDetails = {}, refetch } = useQuery({
    queryKey: ["usersDetails", phone],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user-phone?phone=${phone}`);
      console.log(data);
      return data;
    },
  });

  return (
    <div className="mt-5 scrollBarDiv text-[#5c5e79] pr-3 lg:pr-0 lg:w-[100%] w-[93%] overflow-y-scroll  h-[85%]">
      {/* Balance Card */}
      <div className="w-full  border rounded-2xl bg-[#0628EE] p-3 shadow-xl text-white">
        <div className="flex justify-between mb-4">
          <p className="text-lg">
            Welcome back, <br />
            <span className="text-[#ffffff] text-xl font-semibold">
              {UserDetails?.name?.toUpperCase()} ({UserDetails?.role})
            </span>
          </p>
          <IoMdNotificationsOutline className="text-4xl bg-white/20 rounded-full p-2" />
        </div>
        <div className="">
          <h1 className="base font-medium">Total Balance</h1>
        </div>
        <p className="text-4xl font-semibold mt-1 flex gap-2">
          <span className="text-xl mt-[2px]">$</span>{" "}
          {UserDetails?.accountBalance}
        </p>
        {/* Transfer Add Recieve */}
        <div className="w-full  grid grid-cols-2 rounded-2xl  mt-6 gap-2 ">
          <button
            onClick={() => navigate("/dashboard/cash-in-request")}
            className={`${
              UserDetails?.role === "User"
                ? "hidden"
                : "active:scale-95 transition-all duration-300 shadow-xl  min-h-[50px] hover:outline-1 text-black/70 text-sm rounded-full bg-white/15 flex justify-start pl-3 gap-2 items-center"
            }`}
          >
            <span className="text-2xl">
              {UserDetails?.role === "Agent" ? (
                <GoArrowDownLeft />
              ) : (
                <GrTransaction />
              )}
            </span>
            <span className="">
              {UserDetails?.role === "Agent" ? "Request" : ""}
            </span>
          </button>
          <button
            onClick={() => navigate("/dashboard/transfer")}
            className={
              UserDetails?.role === "User"
                ? "hidden"
                : "shadow-xl  min-h-[50px] hover:outline-1  text-black/70 text-sm rounded-full bg-white/15 flex justify-start pl-3 gap-2 items-center"
            }
          >
            <span className=" text-2xl">
              <MdArrowOutward />
            </span>
            <span className="">
              {UserDetails?.role === "Agent" ? "Transfer" : "Add Money"}
            </span>
          </button>
          <button
            onClick={() => navigate("/dashboard/add-money")}
            className={`${
              UserDetails?.role === "Agent" ? "hidden" : ""
            } shadow-xl  min-h-[50px] hover:outline-1  text-black/70 px-2 text-base rounded-full color-primary flex justify-center  pl-3 gap-2 items-center`}
          >
            <span className="text-2xl">
              <MdOutlineAddBox />
            </span>
            <span className="">Cash In</span>
          </button>
          <button
            onClick={() => navigate("/dashboard/cash-out")}
            className={`${
              UserDetails?.role === "Agent" ? "hidden" : ""
            } shadow-xl  min-h-[50px] hover:outline-1 px-2  text-white text-base bg-[#222222] rounded-full  flex justify-start pl-3 gap-2 items-center`}
          >
            <span className="text-2xl ">
              <PiHandWithdraw />
            </span>
            <span className="">Cash Out</span>
          </button>
        </div>
      </div>
      {/* Transaction History */}
      <h1 className=" text-3xl text-center mt-5 mb-5">Transactions</h1>
      <Transaction />
    </div>
  );
};

export default UserHome;
