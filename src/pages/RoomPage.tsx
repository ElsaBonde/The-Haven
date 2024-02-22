import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mockedRoom } from "../rooms";
import room1Image from "../assets/room1.png";
import room2Image from "../assets/room2.png";
import room3Image from "../assets/room3.png";



const TextDiv = styled.div`
flex-basis: 40%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 80px;
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
  margin-right: 20%;
  white-space: pre-line;
`;

const ReserveButton = styled.button`
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
  width: 36%;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
  }
`;

const PhotoDiv = styled.div`
flex-basis: 60%;
  flex-grow: 1;
  justify-content: center; 
  align-items: center; 
  margin: 80px 0px;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function RoomPage() {
  
  const params = useParams();
  const room = mockedRoom.find((room) => room.id === params.id);

  if (!room) {
    return (
      <div>
        <h1>This room does not longer exist.</h1>
      </div>
    );
  }

  //gör om <br> till ett mellanslag då html och js har olika syntax
  const descriptionWithSpaces = room.description.replace(/<br\s*\/?>/gi, "\n");

  let imageSrc;
  switch (room.id) {
    case "1":
      imageSrc = room1Image;
      break;
    case "2":
      imageSrc = room2Image;
      break;
    case "3":
      imageSrc = room3Image;
      break;
    default:
      imageSrc = room1Image;
  }

  return (
    <>
      <TextDiv>
      <SiteTitle>{room.title}</SiteTitle>
      <SubTitle>{room.subtitle}</SubTitle>
      <Text>{descriptionWithSpaces}</Text>
      <ReserveButton>Make reservation</ReserveButton>
      </TextDiv>
      <PhotoDiv>
      <RoomImage src={imageSrc} alt={room.title} />
      </PhotoDiv>
    </>
  );
}
