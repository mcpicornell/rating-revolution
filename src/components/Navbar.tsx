import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer to="/">
        <Logo />
        <Title>
          Rating <Subtitle>Revolution</Subtitle>
        </Title>
      </LogoContainer>
      <UlElementsContainer>
        <LinkList to="/">
          <LiElement>Last Reviews</LiElement>
        </LinkList>
        <LinkList to="/about-us">
          <LiElement>About Us</LiElement>
        </LinkList>
        {/* <LinkList to="/reviews">
          <LiElement>Reviews</LiElement>
        </LinkList> */}
        <LinkList to="/hotels">
          <LiElement>Hotels</LiElement>
        </LinkList>
        <LinkList to="/profile">
          <LiElement>Profile</LiElement>
        </LinkList>
      </UlElementsContainer>
    </Nav>
  );
};
export default Navbar;

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
  justify-content: space-around;
  align-items: center;
  width: 500px;
`;

const LiElement = styled.li`
  list-style-type: none;
  color:#000000;
  text-align: center;
`;

const LinkList = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;

  &.active {
    text-decoration: underline 3px solid #08A6E4;
    text-underline-offset: 30px;
  }

  :hover{
    text-decoration: underline 3px solid #08A6E4;
    text-underline-offset: 30px;
  }
`;
