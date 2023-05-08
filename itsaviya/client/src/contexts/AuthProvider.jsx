import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedUser = localStorage.getItem("user");
    let parsedUser;
    try {
      parsedUser = JSON.parse(storedUser);
    } catch (error) {
      console.log(error);
    }
    return parsedUser ? parsedUser : {}; // if there's a user in the local storage, use it.
  });

  const [openAuth, setOpenAuth] = useState(false);

  const isLogged = auth.accessToken ? true : false; // bool

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(auth));
  }, [auth]); // whenever "auth" changes, we set the local storage value anew

  //can be used in many places through out the app
  const handleLogOut = async () => {
    try {
      //sending a logout request to clear the cookie and delete the AT from DB
      await axios.get("user/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
      // return; // not clearing the auth if logout failed
    }
    setAuth({}); // clearing the auth state, also clears the local storage.
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isLogged, openAuth, setOpenAuth, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
