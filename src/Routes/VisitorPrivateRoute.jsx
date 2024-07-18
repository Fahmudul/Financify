import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";

const VisitorPrivateRoute = ({ children }) => {
  const phone = JSON.parse(localStorage.getItem("user-details")).phone;
  console.log(phone);
  const axiosRequest = useAxios();
  const { data = {} } = useQuery({
    queryKey: ["visitor"],
    queryFn: async () => {
      const { data } = await axiosRequest(
        `/visitor-not-accepted?phone=${phone}`
      );
      console.log(data);
      return data;
    },
  });
  // Redirect to User Dashboard
  if (data?.role === "User") {
    return <Navigate to="/dashboard/user-home" replace />;
  }

  // // Redirect to Agent Dashboard
  // else if (data?.existInAccepted?.role === "Agent") {
  //   return <Navigate to="/dashboard/agent-home" replace />;
  // }
  // console.log(data);
  const isLoggedIn = true;

  if (phone && isLoggedIn) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default VisitorPrivateRoute;
