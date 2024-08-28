import Logo from "../components/Logo";
import styled from "styled-components";
import { HiMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DualNavigation from "../components/DualNavigation";
import { useNavigate } from "react-router-dom";
import { IUser } from "../features/interfaces";
import { getUserByEmail } from "../features/users/fetchUsers";
import React, { useState, FormEvent, useEffect } from "react";
import { request } from '../features/utils';

const LoginUserPage = () => {
  const nav = useNavigate();
  const firstRoute = {
    routeNav: "/login",
    routeString: "User"
  }

  const secondRoute = {
    routeNav: "/login-hotel",
    routeString: "Hotel"
  }
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userObj, setUserObj] = useState<IUser>();

  const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value)
  };
  const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value)
  };
  
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(email === "neo@neo.com" && password === "neo") {
      
      localStorage.setItem("auth", "true");
      const obj = JSON.stringify({profile: "user", id: userObj?.id});
      localStorage.setItem("profile", obj);
      if(localStorage.getItem("auth")){
        nav(`/profile/${userObj?.id}`)
      }
    }
  };

  useEffect(() => {
    if(!userObj){
      const fetchUser = async (email: string) => {
        const fetchedUser = await getUserByEmail(email);
        if (fetchedUser) {
          setUserObj(fetchedUser);
        }
        return null;
      };
    if(email){
      fetchUser(email)
    }
    }
  }, [email, userObj]);

    return (
      <LoginForm onSubmit={onSubmitHandler}>
        <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute} /> 
        <Logo />
        <ContainerText>
          <Title>Join our community!</Title>
          <SubTitle>Your reviews makes the difference</SubTitle>
          <InputContainer>
            <HiMailStyled />
            <InputForm placeholder="Email" type="email" required onChange={handleInputEmailChange}/>
          </InputContainer>
          <InputContainer>
            <IoMdLockStyled />
            <InputForm placeholder="Password" type="password" required onChange={handleInputPasswordChange}/>
          </InputContainer>
          <ButtonLogin type="submit">Login</ButtonLogin>
        </ContainerText>
        <ContainerCreateAccount>
          <SubTitle>Don't have an account yet?</SubTitle>
          <NavLinkStyled to="/create-user">
            <CreateAccount>Create an account</CreateAccount>
          </NavLinkStyled>
        </ContainerCreateAccount>

        <ContainerCredentials>
          <SubTitle>email: <Title>neo@neo.com</Title></SubTitle>
          <SubTitle>password: <Title>neo</Title></SubTitle>
        </ContainerCredentials>
      </LoginForm>
    );
  };
  export default LoginUserPage;
  
  export const LoginForm = styled.form`
    border-radius: 24px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);
    min-width: 200px;
    width: 350px;
    padding: 20px 20px 10px 30px;
  `
  export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  `;
  export const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.035em;
    text-align: left;
    margin-top: 10px;
    color: black;
  `;
  
  
   export const SubTitle = styled.span`
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.035em;
    text-align: left;
    color: #717070;
    margin-top: 5px;
    margin-bottom: 15px;
   `;

  export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid  rgba(189, 189, 189, 1);
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
    width: 85%;
    margin-right: 10px;
  `;

  export const HiMailStyled = styled(HiMail)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
  `;

  export const IoMdLockStyled = styled(IoMdLock)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
  `;

   export const InputForm = styled.input`
    border-radius: 8px;
    border-radius: 8px;
    border: 1px;
    border-color: rgba(189, 189, 189, 1);
    margin: 10px;
    width: 250px;
   `;
    export const ButtonLogin = styled.button`
    margin-top: 10px;
    background-color: rgba(47, 128, 237, 1);
    color: #FFFFFF;
    border-radius: 8px;
    padding: 8px 0px 8px 0px;
    font-size: 13px;
    font-weight: 600;
    border: none;
    width: 92%;
    cursor: pointer;
   `;

   export const ContainerCreateAccount = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
   `

   export const CreateAccount = styled(SubTitle)`
    margin-left: 5px;
    color: #2D9CDB;
    font-weight: 400;
    cursor: pointer;
   `
   export const NavLinkStyled = styled(NavLink)`
    text-decoration-color: #2D9CDB;
   `;

   export const ContainerCredentials = styled.div`
    display: flex;
    justify-content: space-around;
   `;