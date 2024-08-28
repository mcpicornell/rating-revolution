import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Logo = () => {
  return (
      <LogoContainer >
        <LogoStar  />
        <Title>
          Rating <Subtitle>Revolution</Subtitle>
        </Title>
      </LogoContainer>
  );
};
export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  text-decoration: none;
`;
export const LogoStar = styled(AiFillStar)`
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