import DualNavigation from "../components/DualNavigation";
import styled from "styled-components";
import CompaniesDetailsPage from "./CompaniesDetailsPage";
import { useEffect } from "react";
import { ICompany, IUser } from "../features/interfaces";
import { useState } from "react";
import { getUserById } from "../features/users/fetchUsers";
import { getCompanyById } from "../features/companies/fetchCompanies";

const ProfilePage = () => {
  
  const profileData = localStorage.getItem("profile");
  const parsedData = JSON.parse(profileData as string);
  const [companyObj, setCompanyObj] = useState<ICompany>();
  const [userObj, setUserObj] = useState<IUser>();
  const [content, setContent] = useState<JSX.Element>();
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
  
  useEffect(() => {
    console.log('Entering useEffect');

    if(parsedData.profile === "user" && !userObj){
      console.log('Fetching user...');
      const fetchUser = async (id: string) => {
        const fetchedUser = await getUserById(id);
        if (fetchedUser) {
          setUserObj(fetchedUser);
        }
        return null;
      };
      fetchUser(parsedData.id)
    }
    if(parsedData.profile === "company" && !companyObj){
      console.log('Fetching company...');
      const fetchCompany = async (id: string) => {
        const fetchedCompany = await getCompanyById(id);
        console.log("Fetched", fetchedCompany);
        if (fetchedCompany) {
          setCompanyObj(fetchedCompany);
        }
        return null;
      };
      fetchCompany(parsedData.id)
    }
  }, [parsedData.id, userObj, parsedData.profile, companyObj]);

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
  export default ProfilePage;

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