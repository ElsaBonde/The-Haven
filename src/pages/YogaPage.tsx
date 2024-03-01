import styled from "styled-components";
import { SiteTitle, SubTitle, Button } from "../StyledElements";
import yogaImage from "../assets/yoga.jpg";

const PhotoDiv = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;

  @media (max-width: 1025px) {
    margin: 10px 30px;
  }
  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextDiv = styled.div`
  flex-basis: 50%;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1025px) {
    margin: 0px 40px;
    align-items: center;
  }
  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const Text = styled.p`
  font-size: 17px;
  margin: 10px 0px;
  margin-right: 25%;

  @media (max-width: 1025px) {
    margin: 0px;
  }
`;

const BookingButton = styled(Button)`
  margin-top: 25px;
  width: 23%;

  @media (max-width: 1025px) {
    width: 30%;
    align-self: center;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
`;

export default function YogaPage() {
  return (
    <>
      <PhotoDiv>
        <Image src={yogaImage} alt={"One of our yoga classes"} />
      </PhotoDiv>
      <TextDiv>
        <SiteTitle>Yoga</SiteTitle>
        <SubTitle>Connect with youself</SubTitle>
        <Text>
          We prioritize your well-being both in mind and spirit, and therefore
          offer a variety of yoga classes suitable for both beginners and more
          experienced practitioners.<br></br> As a guest at the resort, you also
          have the opportunity to attend all yoga classes free of charge,
          subject to availability. <br></br>
          <br></br>Questions? Contact us at +46 73 893 94 75.
        </Text>
        <BookingButton>Book Class</BookingButton>
      </TextDiv>
    </>
  );
}
