import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const CashOutRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (cashOutDetails) => {
      const { data } = await axiosSecure.post("/cash-out", cashOutDetails);
      return data;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Cash Out Request In Process");
      } else {
        toast.error(data.message);
      }
    },
  });
  const handleCashOut = async (e) => {
    e.preventDefault();
    const senderNumber = JSON.parse(localStorage.getItem("user-details")).phone;
    const form = e.target;
    const requestedAmount = parseInt(form.amount.value);
    const agentNumber = form.agentNumber.value;
    const pin = form.pin.value;
    const cashOutDetails = {
      requestedAmount,
      agentNumber,
      senderNumber,
      pin,
      request: "Cash Out",
    };
    // console.log(cashOutDetails);
    await mutateAsync(cashOutDetails);
  };
  return (
    <div className=" mt-5 rounded-3xl text-[#2a2b46] shadow-2xl py-5">
      <h1 className="text-3xl font-bold text-center">Cash Out</h1>
      <form onSubmit={handleCashOut}>
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
              placeholder="Enter agentt number"
            />
          </div>
        </div>
        <div className="mt-5 min-h-[80px] bg-white/30 mx-3 rounded-3xl py-3 px-4">
          <div className="text-2xl text-[#2a2b46] flex items-center ">
            <input
              type="number"
              name="pin"
              required
              id="agent-number"
              className=" bg-transparent outline-none border-none text-black py-2 w-full"
              placeholder="Provide pin to confirm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Cash Out"
            className="btn rounded-full w-[95%] mt-5 text-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default CashOutRequest;
