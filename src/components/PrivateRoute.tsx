import { Navigate, Outlet, useLocation } from "react-router-dom";

export const isLoggedIn = (): boolean => {
    const authData = localStorage.getItem("auth");
    return !!authData;
};

export const PrivateRoute = () => {
    const location = useLocation();
    
    if (location.pathname === "/profile" && !isLoggedIn()) {
      return <Navigate to="/login" />;
    }
    if (location.pathname === "/profile/:id" && !isLoggedIn()) {
      return <Navigate to="/login" />;
    }
    if (location.pathname === "/config/:id" && !isLoggedIn()) {
      return <Navigate to="/login" />;
    }
  
    return <Outlet key={location.pathname}/>;
  };