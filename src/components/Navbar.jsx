import styled from "styled-components";
import {AiFillStar, AiOutlineLogin, AiOutlineLogout} from "react-icons/ai";
import {FaBars} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {isLoggedIn} from "./PrivateRoute";
import {logout} from "../features/login/login";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const nav = useNavigate();
    const closeOpenMenu = () => {
        setIsOpen((prevState) => !prevState);
    };
    const closeMenu = () => {
        setIsOpen(false);
    }
    const profileData = localStorage.getItem("profile");

    const navToProfile = (profileData) => {
        if (profileData !== null) {
            const parsedData = JSON.parse(profileData);
            return `/profile/${parsedData.id}`;
        }
        return "/profile"
    }
    const routeProfile = navToProfile(profileData);

    const navToLogin = () => {
        if (profileData !== null) {
            const parsedData = JSON.parse(profileData);
            if (parsedData.profile === "company") {
                return nav("/login-hotel");
            }
            return nav("/login");
        }
        return nav("/login");
    }
    const logOut = () => {
        logout()
        localStorage.removeItem("auth");
        localStorage.removeItem("profile");
    }

    const LogIcon = () => {
        if (isLoggedIn() === false) {
            return (
                <>
                    <AiOutlineLoginStyled onClick={() => {
                        closeMenu();
                        navToLogin();
                    }}/>
                </>

            )
        }
        return (
            <>
                <AiOutlineLogoutStyled onClick={() => {
                    closeMenu();
                    logOut();
                    navToLogin();
                }}/>
            </>

        )
    }

    return (
        <Nav>
            <LogoContainer to="/" onClick={closeMenu}>
                <Logo/>
                <Title>
                    Rating <Subtitle>Revolution</Subtitle>
                </Title>
            </LogoContainer>
            <UlElementsContainer isOpen={isOpen}>
                <LinkList to="/" onClick={closeMenu}>
                    <LiElement>Last Reviews</LiElement>
                </LinkList>
                <LinkList to="/about-us" onClick={closeMenu}>
                    <LiElement>About Us</LiElement>
                </LinkList>
                <LinkList to="/hotels" onClick={closeMenu}>
                    <LiElement>Hotels</LiElement>
                </LinkList>
                <LinkList to={routeProfile} onClick={closeMenu}>
                    <LiElement>Profile</LiElement>
                </LinkList>
                {LogIcon()}

            </UlElementsContainer>
            <FaBarsStyled onClick={closeOpenMenu}/>
        </Nav>
    );
};
export default Navbar;

const AiOutlineLoginStyled = styled(AiOutlineLogin)`
    color: rgba(47, 128, 237, 1);
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    @media (max-width: 900px) {
        padding: 15px 0px 10px 0px;
    }
`

const AiOutlineLogoutStyled = styled(AiOutlineLogout)`
    color: rgba(47, 128, 237, 1);
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    @media (max-width: 900px) {
        padding: 15px 0px 10px 0px;
    }
`

const Nav = styled.nav`
    display: flex;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
    justify-content: space-between;
    height: 75px;
`;
const LogoContainer = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-left: 10px;
    text-decoration: none;
`;
const Logo = styled(AiFillStar)`
    color: rgba(47, 128, 237, 1);
    width: 30px;
    height: 30px;
`;
const Title = styled.h1`
    margin-left: 10px;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #000000;
`;

const Subtitle = styled.span`
    position: relative;
    left: 7px;
    background-color: rgba(47, 128, 237, 1);
    padding: 2px 5px 2px 5px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
`;

const UlElementsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 500px;
    position: relative;
    @media (max-width: 900px) {
        flex-direction: column;
        position: absolute;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        width: 100%;
        top: 60px;
        visibility: ${(props) => (props.isOpen === true ? "visible" : "hidden")};
        padding-left: 0px;
        z-index: 1;
    }
`;

const FaBarsStyled = styled(FaBars)`
    visibility: hidden;
    position: absolute;
    top: -500%;
    @media (max-width: 900px) {
        visibility: visible;
        position: relative;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        color: rgba(47, 128, 237, 1);
        cursor: pointer;
    }
`;

const LiElement = styled.li`
    list-style-type: none;
    color: #000000;
    text-align: center;
    @media (max-width: 900px) {
        padding: 15px 0px 10px 0px;
    }
`;

const LinkList = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;

    &.active {
        text-decoration: underline 3px solid #08a6e4;
        text-underline-offset: 30px;
        @media (max-width: 900px) {
            text-decoration: none;
        }
    }

    :hover {
        text-decoration: underline 3px solid #08a6e4;
        text-underline-offset: 30px;
        @media (max-width: 900px) {
            text-decoration: none;
        }
    }
`;
