import axios from "axios";
const axiosRequest = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  return axiosRequest;
};

export default useAxios;
