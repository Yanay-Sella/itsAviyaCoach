import useAuth from "./useAuth";
import axios from "../api/axios";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();
  const refreshUrl = process.env.REACT_APP_SERVER_URL + "user/refresh";

  //ask for a new access token from the server using the refresh token within the cookie
  const refresh = async () => {
    // const response = await fetch(refreshUrl, { credentials: "include" });
    const response = await axios.get("/user/refresh", {
      withCredentials: true,
    });
    const accessToken = response.data.accessToken;

    //update the user info with the new access token (and updating it in the local storage)
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      return { ...prev, accessToken };
    });
    return accessToken;
  };

  return refresh;
};

export default UseRefreshToken;
