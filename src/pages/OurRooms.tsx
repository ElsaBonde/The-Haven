import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import room1Image from "../assets/room1.png";
import room2Image from "../assets/room2.png";
import room3Image from "../assets/room3.png";
import { mockedRoom } from "../rooms";

function getImage(id: string): string {
  switch (id) {
    case "1":
      return room1Image;
    case "2":
      return room2Image;
    case "3":
      return room3Image;
    default:
      return "";
  }
}

const PhotoDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 30px;
`;

const PrevNextButton = styled.button`
  height: 20px;
  border: none;
  background: inherit;
  font-family: "Karla", sans-serif;
  font-size: 25px;
  color: #183717;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const ImageOfRooms = styled.div`
  transition: transform 0.5s ease;
  margin: 0px 10px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const TextDiv = styled.div`
  margin: 0px 30px;
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
  margin: 20px 0px;
`;

const StyledLink = styled(Link)`
  width: 450px;
  display: block;
  font-size: 28px;
  color: #183717;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 1px solid #183717;
  margin-bottom: 25px;

  &:hover {
    color: #6a8e68;
    border-bottom: 1px solid #6a8e68;
    transition: color 0.9s ease;
  }
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
  width: 30%;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
  }
`;

export default function OurRooms() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === mockedRoom.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? mockedRoom.length - 1 : prevSlide - 1
    );
  };

  return (
<>
      <PhotoDiv>
        <PrevNextButton onClick={prevSlide}>&lt;</PrevNextButton>
        <CarouselContainer>
          <ImageOfRooms style={{ transform: `translateX(-${currentSlide}%)` }}>
            <Image
              key={mockedRoom[currentSlide].id}
              src={getImage(mockedRoom[currentSlide].id)}
              alt={mockedRoom[currentSlide].title}
            />
          </ImageOfRooms>
        </CarouselContainer>

        <PrevNextButton onClick={nextSlide}>&gt;</PrevNextButton>
      </PhotoDiv>

      <TextDiv>
        <SiteTitle>Rooms</SiteTitle>
        <SubTitle>Discover our hospitality</SubTitle>
        {mockedRoom.map((room) => (
          <StyledLink key={room.title} to={"/our-rooms/" + room.id}>
            {room.title}
          </StyledLink>
        ))}

        <BookingButton>Book now</BookingButton>
      </TextDiv>
      </>
  );
}
