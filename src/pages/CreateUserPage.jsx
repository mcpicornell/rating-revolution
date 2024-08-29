import Logo from "../components/Logo";
import styled from "styled-components";
import {HiMail} from "react-icons/hi";
import {BiImageAdd, BiSolidUser} from "react-icons/bi";
import {GiSpiderMask} from "react-icons/gi";
import {IoMdLock} from "react-icons/io";
import {NavLink, useNavigate} from "react-router-dom";
import DualNavigation from "../components/DualNavigation";
import {useEffect, useState} from "react";
import {createReviewer} from "../features/reviewers/fetchReviewers";

const CreateUserPage = () => {

    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [nickname, setNickname] = useState(null);
    const [name, setName] = useState(null);
    const [reviewer, setReviewer] = useState(null);
    const [response, setResponse] = useState({});

    // TODO: develop logic to handel error to create user

    useEffect(() => {
    if (reviewer) {
        localStorage.setItem("auth", "true");
        const obj = JSON.stringify({profile: "user", id: reviewer.id});
        localStorage.setItem("profile", obj);
        navigate(`/profile/${reviewer.id}`)
    }
    if(response){
        alert(response.toString() )
        setResponse(null);
    }
}, [reviewer, response]);

    const onSubmit = () => {
        if (password !== password2) {
            alert("Password field do not match! Try again :)");
        } else {
            const body = {
                avatar: avatar,
                email: email,
                password: password,
                nickname: nickname,
                name: name
            }
            createReviewer(body, setReviewer, setResponse)
        }
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
        <LoginForm>
            <DualNavigation firstRoute={firstRoute} secondRoute={secondRoute}/>
            <Logo/>
            <ContainerText>
                <Title>Join our community!</Title>
                <SubTitle>Your reviews makes the difference</SubTitle>
                <InputContainer>
                    <BiImageAddStyled/>
                    <InputForm
                        placeholder="Avatar URL"
                        type="text"
                        required
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <BiSolidUserStyled/>
                    <InputForm
                        placeholder="Name"
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <GiSpiderMaskStyled/>
                    <InputForm
                        placeholder="Nickname"
                        type="text"
                        required
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <HiMailStyled/>
                    <InputForm
                        placeholder="Email"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <IoMdLockStyled/>
                    <InputForm
                        placeholder="Password"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <IoMdLockStyled/>
                    <InputForm
                        placeholder="Type your password again"
                        type="password"
                        required
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </InputContainer>
                <Button onClick={onSubmit}>Create account</Button>
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
export default CreateUserPage;

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
    position: relative;
`;
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
    border: 1px solid rgba(189, 189, 189, 1);
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
export const Button = styled.button`
    margin-top: 10px;
    background-color: rgba(47, 128, 237, 1);
    color: #ffffff;
    border-radius: 8px;
    padding: 8px 0px 8px 0px;
    font-size: 13px;
    font-weight: 600;
    border: none;
    width: 92%;
`;

export const ContainerCreateAccount = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 0px;
`;

export const CreateAccount = styled(SubTitle)`
    margin-left: 5px;
    color: #2d9cdb;
    font-weight: 400;
    cursor: pointer;
`;
export const NavLinkStyled = styled(NavLink)`
    text-decoration-color: #2d9cdb;
`;

export const BiImageAddStyled = styled(BiImageAdd)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
`;
export const BiSolidUserStyled = styled(BiSolidUser)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
`;

export const GiSpiderMaskStyled = styled(GiSpiderMask)`
    color: rgba(130, 130, 130, 1);
    position: relative;
    bottom: 1px;
`;
