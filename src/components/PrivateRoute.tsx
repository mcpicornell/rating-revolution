import { Navigate, Outlet, useLocation } from "react-router-dom";

const isLoggedIn = (): boolean => {
    const authData = localStorage.getItem("auth");
    return !!authData;
};

export const PrivateRoute = () => {
    const location = useLocation();
    
    if (location.pathname === "/profile" && !isLoggedIn()) {
      return <Navigate to="/login" />;
    }
  
    return <Outlet key={location.pathname}/>;
  };