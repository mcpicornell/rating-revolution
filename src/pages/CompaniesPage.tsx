import { useAppDispatch, useAppSelector } from "../app/store";
import { getCompaniesData, getCompaniesError, getCompaniesStatus } from "../features/companies/ComapaniesSlice";
import { useEffect } from "react";
import { fetchCompanies } from "../features/companies/fetchCompanies";
import HotelCard from "../components/HotelCard"
import styled from 'styled-components';

const CompaniesPage = () => {

  const companiesData = useAppSelector(getCompaniesData);
  const companiesStatus = useAppSelector(getCompaniesStatus);
  const companiesError = useAppSelector(getCompaniesError)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(companiesStatus === "idle"){
      dispatch(fetchCompanies())
    }
  },[companiesData, companiesStatus, companiesError, dispatch])
  let content: JSX.Element[] = [];

  if(companiesData){
    const companiesDataCopy = [...companiesData]
    companiesDataCopy.forEach((element) => {
      if(element){
        const companyObj = {
          companyId: element.companyId,
          companyName: element.companyName,
          description: element.description,
          rating: element.rating,
          photos: element.photos,
          reviews: element.reviews,
        }
        content.push(
          <>
            <HotelCard key={element.companyId} companyObj={companyObj} />
          </>
        )
      }
    })
  }

    return (
      <>
        <CompanyCardContainer>
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
  `