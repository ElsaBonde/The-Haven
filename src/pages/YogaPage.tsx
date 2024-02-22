import styled from "styled-components";
import yogaImage from "../assets/yoga.jpg";

const PhotoDiv = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
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
`;

const SiteTitle = styled.p`
  font-size: 25px;
  margin: 0px;
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin: 10px 0px;
`;

const Text = styled.p`
  font-size: 17px;
  margin: 10px 0px;
  margin-right: 25%;
`;

const BookingButton = styled.button`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  color: #183717;
  margin-top: 25px;
  background: inherit;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #183717;
  width: 23%;
  cursor: pointer;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
  }
`;

export default function YogaPage() {
  return (
    <>
      <PhotoDiv>
        {" "}
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
