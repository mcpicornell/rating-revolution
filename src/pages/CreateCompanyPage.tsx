import Logo from "../components/Logo";
import DualNavigation from "../components/DualNavigation";
import {LoginForm, ContainerText, Title ,SubTitle ,InputContainer 
, HiMailStyled , IoMdLockStyled , InputForm , Button , ContainerCreateAccount ,
 CreateAccount , NavLinkStyled , BiImageAddStyled , BiSolidUserStyled
 , GiSpiderMaskStyled } from "./CreateUserPage"

const CreateCompanyPage = () => {

    const onSubmit = () => {
        alert("Sorry! This sections still on development")
    }
    const firstRoute = {
      routeNav: "/create-user",
      routeString: "Create User"
    }
  
    const secondRoute = {
      routeNav: "/create-hotel",
      routeString: "Create Hotel"
    }
    
  return (
    <LoginForm onSubmit={onSubmit}>
      <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute} /> 
      <Logo />
      <ContainerText>
        <Title>Join our community!</Title>
        <SubTitle>Your reviews makes the difference</SubTitle>
        <InputContainer>
          <BiImageAddStyled />
          <InputForm placeholder="Profile Picture URL" type="text" required />
        </InputContainer>
        <InputContainer>
          <BiSolidUserStyled />
          <InputForm placeholder="Full Name" type="text" required />
        </InputContainer>
        <InputContainer>
          <GiSpiderMaskStyled />
          <InputForm placeholder="Nickname" type="text" required />
        </InputContainer>
        <InputContainer>
          <HiMailStyled />
          <InputForm placeholder="Email" type="email" required />
        </InputContainer>
        <InputContainer>
          <IoMdLockStyled />
          <InputForm placeholder="Password" type="password" required />
        </InputContainer>
        <InputContainer>
          <IoMdLockStyled />
          <InputForm
            placeholder="Type your password again"
            type="password"
            required
          />
        </InputContainer>
        <Button type="submit">Create account</Button>
      </ContainerText>
      <ContainerCreateAccount>
        <SubTitle>Already a member?</SubTitle>
        <NavLinkStyled to="/login">
          <CreateAccount>Login</CreateAccount>
        </NavLinkStyled>
      </ContainerCreateAccount>
    </LoginForm>
  );
};
export default CreateCompanyPage;

