import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const getRoleUrl = process.env.REACT_APP_SERVER_URL + "user/role";

  //TODO: use accessToken to get the role of the user from the server
  useEffect(() => {
    console.log(auth);
    const getRole = async () => {
      await fetch(getRoleUrl, {
        method: "GET",
      });
    };
  }, []);

  const isAdmin = auth.role === 2018; // if the user is an admin
  const location = useLocation();
  console.log(auth);

  return isAdmin ? (
    <Outlet /> // the children of this RequireAuth component
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default RequireAuth;
