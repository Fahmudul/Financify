import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLocation } from "react-router-dom";

const Transaction = () => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const phone = JSON.parse(localStorage.getItem("user-details")).phone;
  const { data: transactionHistory = [] } = useQuery({
    queryKey: ["transactionHistory"],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/transaction-history/?phone=${phone}`
      );
      console.log(data);
      return data;
    },
  });
  if (transactionHistory.length === 0)
    return (
      <div className="text-white text-center  flex justify-center items-center">
        No Transaction History
      </div>
    );
  return (
    <div
      className={` rounded-lg  ${
        location.pathname === "/dashboard/user-home" && "/dashboard/agent-home"
          ? "h-auto"
          : "h-[85%]"
      }  lg:w-[100%] w-[100%] mr-3  mt-7 mb-1`}
    >
      <h1
        className={`${
          location.pathname === "/dashboard/user-home" ||
          location.pathname === "/dashboard/agent-home"
            ? "hidden"
            : "block text-2xl text-center my-2 font-semibold"
        }`}
      >
        Transactions
      </h1>

      <div
        className={`overflow-x-auto ${
          location.pathname === "/dashboard/user-home" ||
          location.pathname === "/dashboard/agent-home"
            ? "px-0"
            : "px-3"
        }`}
      >
        <table
          className={`table text-[#5c5e79] ${
            location.pathname === "/dashboard/user-home" ||
            location.pathname === "/dashboard/agent-home"
              ? ""
              : "bg-[#ffffff]"
          }`}
        >
          {/* head */}
          <thead className="text-lg">
            <tr className="">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-semibold">
            {/* row 1 */}
            {transactionHistory.map((user, index) => (
              <tr key={index}>
                <td>{user?.senderNumber}</td>
                <td>${user?.amount}</td>
                <td>{user?.transactionType}</td>
                <td>
                  {user?.date?.split(",")[0]} <br />
                  {user?.date?.split(", ")[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
