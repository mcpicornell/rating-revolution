import Logo from "../components/Logo";
import DualNavigation from "../components/DualNavigation";
import {LoginForm, ContainerText, Title ,SubTitle ,InputContainer 
  , HiMailStyled , IoMdLockStyled , InputForm , ButtonLogin , ContainerCreateAccount ,
   CreateAccount , NavLinkStyled , ContainerCredentials } from "./LoginUserPage"

const LoginCompanyPage = () => {
  const firstRoute = {
    routeNav: "/login",
    routeString: "User"
  }

  const secondRoute = {
    routeNav: "/login-hotel",
    routeString: "Hotel"
  }

    return (
      <LoginForm>
        <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute} /> 
        <Logo />
        <ContainerText>
          <Title>Join our community!</Title>
          <SubTitle>Your reviews makes the difference</SubTitle>
          <InputContainer>
            <HiMailStyled />
            <InputForm placeholder="CIF" type="text" required/>
          </InputContainer>
          <InputContainer>
            <IoMdLockStyled />
            <InputForm placeholder="Password" type="password" required/>
          </InputContainer>
          <ButtonLogin>Login</ButtonLogin>
        </ContainerText>
        <ContainerCreateAccount>
          <SubTitle>Don't have an account yet?</SubTitle>
          <NavLinkStyled to="/create-user">
            <CreateAccount>Create an account</CreateAccount>
          </NavLinkStyled>
        </ContainerCreateAccount>

        <ContainerCredentials>
          <SubTitle>CIF: <Title>B57</Title></SubTitle>
          <SubTitle>password: <Title>neo</Title></SubTitle>
        </ContainerCredentials>
      </LoginForm>
    );
  };
  export default LoginCompanyPage;
  