import { createContext, useState, useEffect } from "react";

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

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isLogged, openAuth, setOpenAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
