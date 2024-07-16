import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "./useAxios";

const useAdmin = () => {
  const axiosRequest = useAxios();
  const phone = localStorage.getItem("user-details").phone;
  const { data = {} } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const { data } = await axiosRequest(`/user-phone?phone=${phone}`);
      // console.log(data);
      return data;
    },
  });
  return data;
};

export default useAdmin;
