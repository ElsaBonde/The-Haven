import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mockedRoom } from "../rooms";

const TextDiv = styled.div``;

const PhotoDiv = styled.div``;

export default function Header() {
  const params = useParams();
  const room = mockedRoom.find((room) => room.id === params.id);

  if (!room) {
    return (
      <div>
        <h1>This room does not longer exist.</h1>
      </div>
    );
  }
  return (
    <>
      <TextDiv></TextDiv>
      <h1>ProductPage</h1>
      {room.title}
      {room.subtitle}
      {room.description}
      <PhotoDiv></PhotoDiv>
    </>
  );
}
