import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
    return (
      <div>
        <Navbar key="navbar"/>
        <main>
            <Outlet key={location.pathname}/>
        </main>
      </div>
    );
  };
export default Layout;
  