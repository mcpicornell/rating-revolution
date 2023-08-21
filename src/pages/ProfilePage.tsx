import { useLocation } from "react-router-dom";
import DualNavigation from "../components/DualNavigation";


const ProfilePage = () => {
  const location = useLocation();
  if(localStorage.getItem("profile") === "user"){
    
    const {userObj} = location.state;
    const firstRoute = {
      routeNav: `/profile/${userObj.userId}`,
      routeString: "My Profile"
    }
  
    const secondRoute = {
      routeNav: `/config/${userObj.userId}`,
      routeString: "Config"
    }
    return(
      <>
        <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute}/>
      </>
    )
  }

  if(localStorage.getItem("profile") === "company"){
    return(
      <>
      </>
    )
  }
  return(
    <>
      <h5>Page not found</h5>
    </>
  )
  };
  export default ProfilePage;
  