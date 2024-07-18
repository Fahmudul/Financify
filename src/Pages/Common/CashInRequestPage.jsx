import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CashInRequestPage = () => {
  const axiosSecure = useAxiosSecure();
  const { data: cashInRequestUsers = [], refetch } = useQuery({
    queryKey: ["cashInRequestUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure("/cash-in-requests-list");
      console.log(data);
      return data;
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (tranferDetails) => {
      const { data } = await axiosSecure.patch(
        `/accept-cashin-request`,
        tranferDetails
      );
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Request Accepted");
      refetch();
    },
  });
  const handleAccept = async (phone, agentNumber, amount) => {
    const tranferDetails = {
      phone,
      agentNumber,
      amount: parseInt(amount),
    };
    await mutateAsync(tranferDetails);
    refetch();
  };
  if (cashInRequestUsers.length === 0) {
    return <h1 className="text-2xl text-center my-5">No Cash In Request</h1>;
  }
  return (
    <div className="">
      <h1 className="text-2xl  text-white  p-2  mx-auto font-medium text-center my-5">
        Cash In Request
      </h1>
      <div className="bg-[#D3D3D3] rounded-lg">
        <div className="overflow-x-auto">
          <table className="table text-[#5c5e79] ">
            {/* head */}
            <thead className="text-lg">
              <tr className="">
                <th></th>
                <th>User Phone</th>
                <th>Amount</th>
                <th>Request Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-[16px] font-semibold">
              {/* row 1 */}
              {cashInRequestUsers.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user?.senderNumber}</td>
                  <td>${user?.requestedAmount}</td>
                  <td>{user?.request}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleAccept(
                          user?.senderNumber,
                          user?.agentNumber,
                          user?.requestedAmount
                        )
                      }
                      className="bg-[#5c5e79] text-white p-2 rounded-lg hover:bg-[#2a2e63] active:scale-95 transition-all duration-300"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CashInRequestPage;
