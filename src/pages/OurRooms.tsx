import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mockedRoom } from "../MockedRooms";
import { Button, SiteTitle } from "../StyledElements";

const PhotoDiv = styled.div`
  flex-basis: 45%;
  display: flex;
  align-items: center;
  margin: 0px 30px;

  @media (max-width: 1025px) {
    margin: 10px 57px;
  }
  @media (max-width: 600px) {
    margin: 20px 0px;
  }
`;

const PrevNextButton = styled.button`
  height: 20px;
  border: none;
  background: inherit;
  font-family: "Karla", sans-serif;
  font-size: 25px;
  color: #183717;
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow-x: hidden;
`;

const ImageOfRooms = styled.div`
  transition: transform 5s ease;
  margin: 0px;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TextDiv = styled.div`
  flex-basis: 55%;
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1025px) {
    align-items: center;
  }
  @media (max-width: 600px) {
    margin: 5px 10px;
  }
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin: 20px 0px;

  @media (max-width: 1025px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
  }
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
    transform: translateX(10px);
    color: #6a8e68;
    border-bottom: 1px solid #6a8e68;
    transition: color 0.9s ease;
  }

  @media (max-width: 1025px) {
    font-size: 25px;
    width: 80%;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    width: 80%;
  }
`;

const BookingButton = styled(Button)`
  margin-top: 25px;
  width: 25%;

  @media (max-width: 1025px) {
    width: 30%;
    align-self: center;
    margin-top: 15px;
  }
  @media (max-width: 600px) {
    align-self: center;
    width: 40%;
    margin-top: 5px;
  }
`;

export default function OurRooms() {
  // skapar ett state för att hålla koll på vilken slide som visas
  const [currentSlide, setCurrentSlide] = useState(0);

  // funktion för att gå till nästa slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === mockedRoom.length - 1 ? 0 : prevSlide + 1
    );
  };

  // funktion för att gå till föregående slide
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
          {/*lägger till style för att flytta bilderna*/}
          <ImageOfRooms
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* loopar igenom mockedRoom och skapar en img för varje rum */}
            {mockedRoom.map((room) => (
              <Image key={room.id} src={room.image} alt={room.title} />
            ))}
          </ImageOfRooms>
        </CarouselContainer>

        <PrevNextButton onClick={nextSlide}>&gt;</PrevNextButton>
      </PhotoDiv>

      <TextDiv>
        <SiteTitle>Rooms</SiteTitle>
        <SubTitle>Discover our hospitality</SubTitle>
        {/*hämtar data från mockedRoom och visar den (titeln på rummen som länkar till respektive rumssida)*/}
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
