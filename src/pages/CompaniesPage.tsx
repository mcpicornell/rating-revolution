import { useAppDispatch, useAppSelector } from "../app/store";
import { getCompaniesData, getCompaniesError, getCompaniesStatus } from "../features/companies/ComapaniesSlice";
import { useEffect } from "react";
import { fetchCompanies } from "../features/companies/fetchCompanies";
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


    return (
      <>
        
      </>
    );
  };
  export default CompaniesPage;
  