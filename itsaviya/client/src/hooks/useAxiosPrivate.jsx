import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import UseRefreshToken from "./UseRefreshToken";
import useAuth from "./useAuth";

const UseAxiosPrivate = () => {
  const refresh = UseRefreshToken();
  const { auth, setOpenAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`; // attaching the access token to the request
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config; // getting the previous request

        //if acceessToken exipred (403)
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          console.log("getting new access token");
          prevRequest.sent = true;
          let newAccessToken;
          try {
            newAccessToken = await refresh(); //getting a new access token and setting the user
          } catch (error) {
            console.log("failed to refresh");
          }
          //was not able to get new accessToken need to log in (pop up)
          if (!newAccessToken) {
            setOpenAuth(true);
          }
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`; //attaching the new access token to the old request
          return axiosPrivate(prevRequest); // making the request again
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default UseAxiosPrivate;
