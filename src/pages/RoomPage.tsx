import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mockedRoom } from "../rooms";

const TextDiv = styled.div`
flex-basis: 45%;
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
  cursor: pointer;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
  }
`;

const PhotoDiv = styled.div`
flex-basis: 65%;
  flex-grow: 1;
  justify-content: center; 
  align-items: center; 
  margin: 80px 0px;
  margin-right: 80px;
`;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function RoomPage() {
  //hämtar id från url
  const params = useParams();
  //hittar rummet som matchar id
  const room = mockedRoom.find((room) => room.id === params.id);

  //om rummet inte finns så visa en h1 med texten "This room does not longer exist."
  if (!room) {
    return (
      <div>
        <h1>This room does not longer exist.</h1>
      </div>
    );
  }

  //gör om <br> taggar till \n för att kunna visa texten på flera rader
  const descriptionWithSpaces = room.description.replace(/<br\s*\/?>/gi, "\n");

  return (
    <>
      <TextDiv>
        {/* hämta data från room baserat på id och visa det */}
      <SiteTitle>{room.title}</SiteTitle>
      <SubTitle>{room.subtitle}</SubTitle>
      <Text>{descriptionWithSpaces}</Text>
      <ReserveButton>Make reservation</ReserveButton>
      </TextDiv>
      <PhotoDiv>
        {/* map:ar igenom mockedRoom och hittar rummet som matchar id:et för att visa rätt bild */}
      {mockedRoom.map((room) => {
        if (room.id === params.id) {
          return (
            <RoomImage key={room.id} src={room.image} alt={room.title} />
          );
        }
        return null;
      })}
      </PhotoDiv>
    </>
  );
}