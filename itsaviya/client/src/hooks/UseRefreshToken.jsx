import useAuth from "./useAuth";

const UseRefreshToken = () => {
  const { setAuth } = useAuth();
  const refreshUrl = process.env.REACT_APP_SERVER_URL + "user/refresh";

  //ask for a new access token from the server using the refresh token within the cookie
  const refresh = async () => {
    const response = await fetch(refreshUrl, { credentials: "include" });
    const resData = await response.json();
    const accessToken = resData.accessToken;
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      return { ...prev, accessToken };
    });
    return accessToken;
  };

  return refresh;
};

export default UseRefreshToken;
