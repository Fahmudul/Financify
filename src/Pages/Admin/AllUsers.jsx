import React, { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";

const AllUsers = () => {
  const axiosRequest = useAxios();
  useEffect(() => {
    // Retrive user data from server
    const userData = async () => {
      const res = await axiosRequest(
        `/user-phone?phone=${localStorage.getItem("user-phone")}`
      );
      const data = res.data;
      // console.log(data);
    };
    userData();
  }, [axiosRequest]);
  return (
    <div className="">
      <h1 className="text-lg font-medium text-center    mt-5">
        All Account Holder
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Select
                    </option>
                    <option>Approved</option>
                    <option>Decline</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
