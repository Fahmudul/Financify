import { useMutation } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Transfer = () => {
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (transferDetails) => {
      const { data } = await axiosSecure.patch("/send-money", transferDetails);
      // console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Transfer Successful");
    },
    onError: (error) => {
      // toast.error(error.response.data.message);
      console.log(error);
    },
  });
  const handleTransfer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const receiverNumber = form.phonenumber.value;
    const amount = form.amount.value;
    const pin = form.pin.value;
    const senderNumber = JSON.parse(localStorage.getItem("user-details")).phone;
    const transferDetails = {
      receiverNumber,
      amount,
      pin,
      senderNumber,
    };
    // console.log(receiverNumber, amount, pin, senderNumber);
    await mutateAsync(transferDetails);
  };
  return (
    <div className=" mt-5 rounded-3xl text-[#2a2b46] shadow-2xl py-5">
      <h1 className="text-3xl font-bold text-center">Transfer</h1>
      <form onSubmit={handleTransfer}>
        <p className="px-2 text-xl font-semibold">Transfer amount</p>
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
          <p className="text-xl font-semibold">Transfer to</p>
          <div className="text-2xl text-[#2a2b46] flex items-center ">
            <input
              type="number"
              name="phonenumber"
              required
              id="agent-number"
              className=" bg-transparent outline-none border-none text-black py-2 w-full"
              placeholder="Enter number to transfer"
            />
          </div>
        </div>
        <div className="mt-5 min-h-[100px] bg-white/30 mx-3 rounded-3xl py-3 px-4">
          <p className="text-xl font-semibold">Enter your pin</p>
          <div className="text-2xl text-[#2a2b46] flex items-center ">
            <input
              type="number"
              name="pin"
              required
              id="agent-number"
              className=" bg-transparent outline-none border-none text-black py-2 w-full"
              placeholder="Enter your 6 digit pin"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Transfer"
            className="btn rounded-full w-[95%] mt-5 text-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default Transfer;
