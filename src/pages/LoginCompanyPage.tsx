import Logo from "../components/Logo";
import DualNavigation from "../components/DualNavigation";
import {LiaHotelSolid} from "react-icons/lia"
import {
  LoginForm,
  ContainerText,
  Title,
  SubTitle,
  InputContainer,
  IoMdLockStyled,
  InputForm,
  ButtonLogin,
  ContainerCreateAccount,
  CreateAccount,
  NavLinkStyled,
  ContainerCredentials,
} from "./LoginUserPage";
import styled from "styled-components";
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getcompanyByCIF } from "../features/companies/fetchCompanies";
import { ICompany } from "../features/interfaces";

const LoginCompanyPage = () => {
  const firstRoute = {
    routeNav: "/login",
    routeString: "User",
  };

  const secondRoute = {
    routeNav: "/login-hotel",
    routeString: "Hotel",
  };
  const nav = useNavigate();
  const [CIF, setCIF] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [companyObj, setCompanyObj] = useState<ICompany>();

  const handleInputCIFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCIF(event?.target.value)
  };
  const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value)
  };

  useEffect(() => {
    if(!companyObj){
      const fetchCompany = async (CIF: string) => {
        const fetchedCompany = await getcompanyByCIF(CIF);
        if (fetchedCompany) {
          setCompanyObj(fetchedCompany);
        }
        return null;
      };
    if(CIF){
      fetchCompany(CIF)
    }
    }
  }, [CIF, companyObj]);
  
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(CIF === "B01" && password === "1234") {
      localStorage.setItem("auth", "true");
      const obj = JSON.stringify({profile: "company", id: companyObj?.id});
      localStorage.setItem("profile", obj);
      if(localStorage.getItem("auth")){
        nav(`/profile/${companyObj?.id}`)
      }
    }
  };

  return (
    <LoginForm onSubmit={onSubmitHandler}> 
      <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute} />
      <Logo />
      <ContainerText>
        <Title>Join our community!</Title>
        <SubTitle>Your reviews makes the difference</SubTitle>
        <InputContainer>
          <LiaHotelSolidStyled />
          <InputForm placeholder="CIF" type="text" required onChange={handleInputCIFChange}/>
        </InputContainer>
        <InputContainer>
          <IoMdLockStyled />
          <InputForm placeholder="Password" type="password" required onChange={handleInputPasswordChange}/>
        </InputContainer>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </ContainerText>
      <ContainerCreateAccount>
        <SubTitle>Don't have an account yet?</SubTitle>
        <NavLinkStyled to="/create-hotel">
          <CreateAccount>Create an account</CreateAccount>
        </NavLinkStyled>
      </ContainerCreateAccount>

      <ContainerCredentials>
        <SubTitle>
          CIF: <Title>B01</Title>
        </SubTitle>
        <SubTitle>
          password: <Title>1234</Title>
        </SubTitle>
      </ContainerCredentials>
    </LoginForm>
  );
};
export default LoginCompanyPage;

const LiaHotelSolidStyled = styled(LiaHotelSolid)`
  
`;
