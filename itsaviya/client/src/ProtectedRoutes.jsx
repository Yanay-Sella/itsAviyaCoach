import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import UseAxiosPrivate from "./hooks/UseAxiosPrivate";

const ProtectedRoutes = () => {
  const axiosPrivate = UseAxiosPrivate();
  const { isLogged } = useAuth();
  const [isAdmin, setIsAdmin] = useState();
  const [isLoading, setIsLoading] = useState(true); // initialy loading

  useEffect(() => {
    if (!isLogged) {
      setIsAdmin(false);
      return;
    }
    const getOkay = async () => {
      try {
        const response = await axiosPrivate.get("user/role");
        const approve = response.data;
        setIsAdmin(approve);
      } catch (error) {
        console.log(error);
        setIsAdmin(false);
      }
    };
    getOkay();
  }, []);

  useEffect(() => {
    if (isAdmin !== undefined) setIsLoading(false); // loading finished
    if (!isLogged) setIsAdmin(false);
  }, [isAdmin, isLogged]);

  const location = useLocation();

  return (
    !isLoading &&
    (isAdmin ? (
      <Outlet /> // the children of this ProtectedRoutes component
    ) : (
      <Navigate to="/home" state={{ from: location }} replace />
    ))
  );
};

export default ProtectedRoutes;
