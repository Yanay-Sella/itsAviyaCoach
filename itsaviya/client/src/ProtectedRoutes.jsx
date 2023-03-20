import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ProtectedRoutes = () => {
  const { auth } = useAuth();
  const getRoleUrl = process.env.REACT_APP_SERVER_URL + "user/role";

  //TODO: use accessToken/userId to get the role of the user from the server
  useEffect(() => {
    console.log(auth);
    const getRole = async () => {
      await fetch(getRoleUrl, {
        method: "GET",
      });
    };
  }, []);

  console.log(process.env.REACT_APP_USER_ADMIN_ROLE);
  const isAdmin = `${auth.role}` === `${process.env.REACT_APP_USER_ADMIN_ROLE}`; // if the user is an admin
  console.log(isAdmin);
  const location = useLocation();
  console.log(auth);

  return isAdmin ? (
    <Outlet /> // the children of this ProtectedRoutes component
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
