import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return JSON.parse(storedUser) || {}; // if there's a user in the local storage, use it.
  });

  const isLogged = auth.accessToken !== undefined; // bool

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(auth));
  }, [auth]); // whenever "auth" changes, we set the local storage value anew

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isLogged, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
