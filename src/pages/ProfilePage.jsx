import DualNavigation from "../components/DualNavigation";
import styled from "styled-components";
import { CompaniesProfile } from "../components/CompaniesProfile";
import { useEffect } from "react";
import { useState } from "react";
import { fetchReviewerById } from "../features/reviewers/fetchReviewers";
import { fetchCompanyById } from "../features/companies/fetchCompanies";
import UserProfile from "../components/UserProfile";
import {fetchReviews} from "../features/reviews/fetchReviews";

const ProfilePage = () => {
  const profileData = localStorage.getItem("profile");
  const parsedData = JSON.parse(profileData);
  const [company, setCompany] = useState();
  const [user, setUser] = useState();
  const [content, setContent] = useState();

  const routes = {
    firstRoute: {
      routeNav: `/profile/${parsedData.id}`,
      routeString: "My Profile",
    },
    secondRoute: {
      routeNav: `/config/${parsedData.id}`,
      routeString: "Config",
    },
  };

  useEffect(() => {
    if (parsedData.profile === "user" && !user) {
      fetchReviewerById(parsedData.id, setUser)
    }

    if (parsedData.profile === "company" && !company) {
      fetchCompanyById(parsedData.id, setCompany)
    }
  }, [parsedData.id, user, parsedData.profile, company]);


  if (parsedData.profile === "user") {
    return (
      <>
        <PageContainer>
          <ContainerDualNav>
            <DualNavigation
              firstRoute={routes.firstRoute}
              secondRoute={routes.secondRoute}
            />
          </ContainerDualNav>

          <UserProfile user={user} />
        </PageContainer>
      </>
    );
  }

  if (parsedData.profile === "company" && company) {
    return (
      <>
        <PageContainer>
          <ContainerDualNav>
            <DualNavigation
              firstRoute={routes.firstRoute}
              secondRoute={routes.secondRoute}
            />
          </ContainerDualNav>

          <CompaniesProfile company={company} />
        </PageContainer>
      </>
    );
  }
  return (
    <>
    </>
  );
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

const PageContainer = styled.div`
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

const ContainerDualNav = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;
`;
