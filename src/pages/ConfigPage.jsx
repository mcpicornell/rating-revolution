
import DualNavigation from "../components/DualNavigation";
import styled from "styled-components";

const ConfigPage = () => {

  const profileData = localStorage.getItem("profile");
  const parsedData = JSON.parse(profileData);

  const routes = {
    firstRoute: {
      routeNav: `/profile/${parsedData.id}`,
      routeString: "My Profile"
    },
    secondRoute: {
      routeNav: `/config/${parsedData.id}`,
      routeString: "Config"
    }

  }

  if(parsedData.profile === "user"){
      
      
      return(
        <>
          <DualNavigation firstRoute={routes.firstRoute} secondRoute={routes.secondRoute}/>
          <Span>USER</Span>
        </>
      )
    
  }

  if(parsedData.profile === "company"){
    
    return(
      <>
      <DualNavigation firstRoute={routes.firstRoute} secondRoute={routes.secondRoute}/>
      <Span>COMPANY</Span>
      </>
    )
  }
  return(
    <>
      <Container>
        <span>Page not found</span>
        
      </Container>
    </>
  )
  };
  export default ConfigPage;
  

  const Container = styled.div`
    margin-top: 500px;
    font-size: 22px;
    background-color: red;
  `;
      const Span = styled.span`
      margin-top: 500px;
      font-size: 22px;
      background-color: red;
    `;