import styled from "styled-components";
import MellissaImage from "../assets/melissa-askew-tSlvoSZK77c-unsplash.jpg";
import Hotel from "../assets/sara-dubler-Koei_7yYtIo-unsplash.jpg"
import Friends from "../assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg"

const AboutUsPage = () => {
  return (
    <>
      <CardContainer>
        <ImgContainer>
          <ImgCard src={MellissaImage} />
        </ImgContainer>

        <TextContainer>
          <TitleCard>Join the Reviewlution!</TitleCard>
          <TextCard>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            fermentum et sollicitudin ac orci phasellus egestas tellus. Quis vel
            eros donec ac. Rhoncus mattis rhoncus urna neque viverra justo nec
            ultrices. Sapien pellentesque habitant morbi tristique senectus et.
            Duis convallis convallis tellus id interdum velit. Pretium viverra
            suspendisse potenti nullam ac. Nibh venenatis cras sed felis eget
            velit aliquet sagittis. Libero enim sed faucibus turpis in eu mi.
          </TextCard>
        </TextContainer>
      </CardContainer>
      <CardContainer>
        

        <TextContainer>
          <TitleCard>Check our reviews</TitleCard>
          <TextCard2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            fermentum et sollicitudin ac orci phasellus egestas tellus. Quis vel
            eros donec ac. Rhoncus mattis rhoncus urna neque viverra justo nec
            ultrices. Sapien pellentesque habitant morbi tristique senectus et.
            Duis convallis convallis tellus id interdum velit. Pretium viverra
            suspendisse potenti nullam ac. Nibh venenatis cras sed felis eget
            velit aliquet sagittis. Libero enim sed faucibus turpis in eu mi.
          </TextCard2>
        </TextContainer>
        <ImgContainer>
          <ImgCard src={Hotel} />
        </ImgContainer>
      </CardContainer>

      <CardContainer>
        <ImgContainer>
          <ImgCard src={Friends} />
        </ImgContainer>

        <TextContainer>
          <TitleCard>Your opinion is important</TitleCard>
          <TextCard>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            fermentum et sollicitudin ac orci phasellus egestas tellus. Quis vel
            eros donec ac. Rhoncus mattis rhoncus urna neque viverra justo nec
            ultrices. Sapien pellentesque habitant morbi tristique senectus et.
            Duis convallis convallis tellus id interdum velit. Pretium viverra
            suspendisse potenti nullam ac. Nibh venenatis cras sed felis eget
            velit aliquet sagittis. Libero enim sed faucibus turpis in eu mi.
          </TextCard>
        </TextContainer>
      </CardContainer>
    </>
  );
};
export default AboutUsPage;

const CardContainer = styled.div`
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px 0px 20px 0px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgCard = styled.img`
  width: 90%;
  border-radius: 12px;
`;

const TitleCard = styled.h3`
  font-family: Noto Sans;
  font-size: 28px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 3%;
  @media (max-width: 900px) {
    font-size: 25px;
    text-align: center;
  }
`;
const TextCard = styled.p`
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 400;
  text-align: justify;
  line-height: 22px;
  margin-right: 40px;
  @media (max-width: 900px) {
    margin-left: 40px;
  }
`;

const TextCard2 = styled(TextCard)`
  margin-left: 40px;
`;
