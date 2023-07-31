import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

  

const Layout: FC = () => {
    return (
      <>
      <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
      </div>
        
      </>
    );
  };
export default Layout;
  