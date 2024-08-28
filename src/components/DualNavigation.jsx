import styled from "styled-components";
import { NavLink } from "react-router-dom";


const DualNavigation = ({firstRoute, secondRoute}) => {
  return (
    <Container>
      <UserContainer>
        <NavLinkMenu to={firstRoute.routeNav}>
          <Element>{firstRoute.routeString}</Element>
        </NavLinkMenu>
      </UserContainer>
      <CompanyContainer>
        <NavLinkMenu to={secondRoute.routeNav}>
          <Element>{secondRoute.routeString}</Element>
        </NavLinkMenu>
      </CompanyContainer>
    </Container>
  );
};
export default DualNavigation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

const UserContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const CompanyContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const NavLinkMenu = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
  background-color: rgba(172, 172, 172, 0.1);
  margin: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.active {
    background-color: rgba(47, 128, 237, 1);
    color: white;
  }
`;

const Element = styled.span``;
