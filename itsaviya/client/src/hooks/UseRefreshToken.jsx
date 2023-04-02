import useAuth from "./useAuth";
import axios from "../api/axios";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();

  //ask for a new access token from the server using the refresh token within the cookie
  const refresh = async () => {
    let response;
    let accessToken = null;
    try {
      response = await axios.get("/user/refresh", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
    if (response) accessToken = response.data.accessToken;

    //update the user info with the new access token (and updating it in the local storage)
    setAuth((prev) => {
      return { ...prev, accessToken };
    });
    return accessToken;
  };

  return refresh;
};

export default UseRefreshToken;
