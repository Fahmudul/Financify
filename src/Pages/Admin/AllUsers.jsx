import useAxios from "../../Hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AiOutlineDelete } from "react-icons/ai";

const AllUsers = () => {
  const axiosRequest = useAxios();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosRequest(`/users`);
      const data = res.data;
      // console.log(data);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (actionDetails) => {
      // console.log(action, phone);
      const res = await axiosRequest.patch(
        `/accept-visitor-request/?phone=${actionDetails.phone}&action=${actionDetails.action}`
      );
      const data = res.data;
      console.log(data);
      return data;
    },
  });

  const acceptOrReject = async (e, phone) => {
    const action = e.target.value;
    // console.log(action);
    console.log(phone);
    const actionDetails = { phone, action };
    await mutateAsync(actionDetails);
    refetch();
  };

  return (
    <div className="">
      <h1 className="text-2xl  text-white  p-2  mx-auto font-medium text-center    my-5">
        All Account Holder
      </h1>
      <div className="bg-[#D3D3D3] rounded-lg">
        <div className="overflow-x-auto">
          <table className="table text-[#5c5e79] ">
            {/* head */}
            <thead className="text-lg">
              <tr className="">
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-[16px] font-semibold">
              {/* row 1 */}
              {data.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.phone}</td>
                  <td>
                    {"appliedFor" in user
                      ? "VISITOR"
                      : `${user?.role?.toUpperCase()}`}
                  </td>
                  <td>
                    {"appliedFor" in user ? (
                      <select
                        className="rounded-lg py-1 px-1 shadow-md"
                        value="activeBlock"
                        onChange={(e) => acceptOrReject(e, user?.phone)}
                      >
                        <option selected>Select</option>
                        <option value="approved">Approved</option>
                        <option value="block">Block</option>
                      </select>
                    ) : (
                      <button className="">
                        <AiOutlineDelete className="text-3xl " />
                      </button>
                    )}
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

export default AllUsers;
