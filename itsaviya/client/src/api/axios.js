import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  // validateStatus: () => true,
});

//used in the useAxiosPrivate hook, private requests will only be made with the hook!
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
