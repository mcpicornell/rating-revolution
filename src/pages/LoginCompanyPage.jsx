import Logo from "../components/Logo";
import DualNavigation from "../components/DualNavigation";
import {LiaHotelSolid} from "react-icons/lia"
import {
    ButtonLogin,
    ContainerCreateAccount,
    ContainerCredentials,
    ContainerText,
    CreateAccount,
    InputContainer,
    InputForm,
    IoMdLockStyled,
    LoginForm,
    NavLinkStyled,
    SubTitle,
    Title,
} from "./LoginUserPage";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../features/login/login";

const LoginCompanyPage = () => {
    const nav = useNavigate();
    const firstRoute = {
        routeNav: "/login",
        routeString: "User"
    }

    const secondRoute = {
        routeNav: "/login-hotel",
        routeString: "Hotel"
    }
    const [CIF, setCIF] = useState();
    const [password, setPassword] = useState();
    const [loginResponse, setLoginResponse] = useState();

    useEffect(() => {
        if (loginResponse) {
            console.log(loginResponse)
            localStorage.setItem("auth", "true");
            const obj = JSON.stringify({profile: "company", id: loginResponse.id});
            localStorage.setItem("profile", obj);
            nav(`/profile/${loginResponse.id}`)
        }
    }, [loginResponse]);


    const handleInputCIFChange = (event) => {
        setCIF(event.target.value)
    };
    const handleInputPasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        login({CIF: CIF, password: password}, setLoginResponse)
    };

    return (
        <LoginForm onSubmit={onSubmitHandler}>
            <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute}/>
            <Logo/>
            <ContainerText>
                <Title>Join our community!</Title>
                <SubTitle>Your reviews makes the difference</SubTitle>
                <InputContainer>
                    <LiaHotelSolidStyled/>
                    <InputForm placeholder="CIF" type="text" required onChange={handleInputCIFChange}/>
                </InputContainer>
                <InputContainer>
                    <IoMdLockStyled/>
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
