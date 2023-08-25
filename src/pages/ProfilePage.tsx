import DualNavigation from "../components/DualNavigation";
import styled from "styled-components";
import { CompaniesProfile } from "../components/CompaniesProfile";
import { useEffect } from "react";
import { ICompany, IUser } from "../features/interfaces";
import { useState } from "react";
import { getUserById } from "../features/users/fetchUsers";
import { getCompanyById } from "../features/companies/fetchCompanies";
import UserProfile from "../components/UserProfile";

const ProfilePage = () => {
  const profileData = localStorage.getItem("profile");
  const parsedData = JSON.parse(profileData as string);
  const [companyObj, setCompanyObj] = useState<ICompany>();
  const [userObj, setUserObj] = useState<IUser>();
  const [content, setContent] = useState<JSX.Element>();

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
    if (parsedData.profile === "user" && !userObj) {
      const fetchUser = async (id: string) => {
        const fetchedUser = await getUserById(id);
        if (fetchedUser) {
          setUserObj(fetchedUser);
        }
        return null;
      };
      fetchUser(parsedData.id);
    }
    if (parsedData.profile === "company" && !companyObj) {
      const fetchCompany = async (id: string) => {
        const fetchedCompany = await getCompanyById(id);
        if (fetchedCompany) {
          setCompanyObj(fetchedCompany);
        }
        return null;
      };
      fetchCompany(parsedData.id);
    }
  }, [parsedData.id, userObj, parsedData.profile, companyObj]);

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

          <UserProfile userObj={userObj} />
        </PageContainer>
      </>
    );
  }

  if (parsedData.profile === "company" && companyObj) {
    return (
      <>
        <PageContainer>
          <ContainerDualNav>
            <DualNavigation
              firstRoute={routes.firstRoute}
              secondRoute={routes.secondRoute}
            />
          </ContainerDualNav>

          <CompaniesProfile companyObj={companyObj} />
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
