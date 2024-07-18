import { useMutation } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddMoney = () => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (cashInDetails) => {
      const { data } = await axiosSecure.post("/cash-in", cashInDetails);
      return data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Cash In Request In Process");
      } else {
        toast.error(data.message);
      }
    },
  });
  const handleAddMoney = async (e) => {
    e.preventDefault();
    const form = e.target;
    const requestedAmount = parseInt(form.amount.value);
    const senderNumber = JSON.parse(localStorage.getItem("user-details")).phone;
    const agentNumber = form.agentNumber.value;
    const cashInDetails = {
      requestedAmount,
      agentNumber,
      senderNumber,
      request: "Cash In",
    };
    console.log(cashInDetails);
    await mutateAsync(cashInDetails);
  };
  return (
    <div className=" mt-7 rounded-3xl text-[#2a2b46] bg-[#D3D3D3] mb-2 shadow-2xl py-5 h-[85%]  lg:w-[100%] w-[93%] mx-auto mr-4">
      <h1 className="text-3xl font-bold text-center">Add Money</h1>
      <form onSubmit={handleAddMoney}>
        <div className="text-4xl text-[#2a2b46] flex items-center pl-2">
          <span className="font-semibold">$</span>
          <input
            type="number"
            name="amount"
            required
            className=" bg-transparent outline-none border-none  p-3"
            placeholder="Enter amount"
          />
        </div>
        {/* Transfer to*/}
        <div className="mt-5 min-h-[100px] bg-white/30 mx-3 rounded-3xl py-3 px-4">
          <p className="text-xl font-semibold">Agent Number</p>
          <div className="text-2xl text-[#2a2b46] flex items-center ">
            <input
              type="number"
              name="agentNumber"
              required
              id="agent-number"
              className=" bg-transparent outline-none border-none text-black py-2 w-full"
              placeholder="Enter agent number"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Confirm"
            className="btn rounded-full w-[95%] mt-5 text-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default AddMoney;
