import { useAppDispatch, useAppSelector } from "../app/store";
import {
  getCompaniesData,
  getCompaniesError,
  getCompaniesStatus,
} from "../features/companies/ComapaniesSlice";
import { useEffect } from "react";
import { fetchCompanies } from "../features/companies/fetchCompanies";
import HotelCard from "../components/CompanyCard";
import styled from "styled-components";

const CompaniesPage = () => {
  const companiesData = useAppSelector(getCompaniesData);
  const companiesStatus = useAppSelector(getCompaniesStatus);
  const companiesError = useAppSelector(getCompaniesError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companiesStatus === "idle") {
      dispatch(fetchCompanies());
    }
  }, [companiesData, companiesStatus, companiesError, dispatch]);
  let content: JSX.Element[] = [];

  if (companiesData) {
    const companiesDataCopy = [...companiesData];
    companiesDataCopy.forEach((company) => {
      if (company) {
        const companyObj = {
          companyId: company.companyId,
          companyName: company.companyName,
          description: company.description,
          rating: company.rating,
          photos: company.photos,
          reviews: company.reviews,
          contactNumber: company.contactNumber,
          adress: company.adress,
          email: company.email,
        };
        content.push(
          <>
            <HotelCard key={companyObj.companyId} companyObj={companyObj} />
          </>
        );
      }
    });
  }

  return (
    <>
      <CompanyCardContainer key="companyCardContainer">
        {content}
      </CompanyCardContainer>
    </>
  );
};
export default CompaniesPage;

const CompanyCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
