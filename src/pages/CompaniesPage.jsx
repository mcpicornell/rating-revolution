
import {useEffect, useState} from "react";
import { fetchCompanies } from "../features/companies/fetchCompanies";
import HotelCard from "../components/CompanyCard";
import styled from "styled-components";

const CompaniesPage = () => {

  const [companies, setCompanies] = useState(null)

    useEffect(() => {
        if (!companies) {
            fetchCompanies(setCompanies)
        }
    }, [companies]);
  let content = [];

  if (companies) {
    const companiesDataCopy = [...companies];
    companiesDataCopy.forEach((company) => {
      if (company) {
        content.push(
          <>
            <HotelCard key={company.id} company={company} />
          </>
        );
      }
    });
  }

  return (
      <CompanyCardContainer key="companyCardContainer">
        {content}
      </CompanyCardContainer>
    
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
