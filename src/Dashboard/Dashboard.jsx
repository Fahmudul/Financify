import React, { useEffect } from "react";
import useAxios from "../Hooks/useAxios";

const Dashborad = () => {
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
  return <div>this is dahsboard</div>;
};

export default Dashborad;
