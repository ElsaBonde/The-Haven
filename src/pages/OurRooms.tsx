import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mockedRoom } from "../rooms";

const PhotoDiv = styled.div`
  flex-basis: 45%;
  display: flex;
  align-items: center;
  margin: 0px 30px;

  @media (max-width: 600px) {
    margin: 10px 0px;
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
  z-index: 1;
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

  @media (max-width: 600px) {
    margin: 5px 10px;
  }
`;

const SiteTitle = styled.p`
  font-size: 25px;
  margin: 0px;

  @media (max-width: 600px) {
    font-size: 21px;
  }
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin: 20px 0px;

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

  @media (max-width: 600px) {
    font-size: 20px;
    width: 80%;
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
  width: 25%;
  cursor: pointer;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
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
