import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkNav, LinkNavMenu, NameDiv } from "../StyledElements";
import SideMenu from "../SideMenu";
import hotelRoom from "../assets/hotelroom.jpg";
import BackgroundImage from "../assets/maybebackground.jpg";

const Head = styled.header`
  display: flex;
  color: white;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const Name = styled.h1`
  font-size: 28px;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 7px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
const SubName = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  margin: 0px;

  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

const Navbar = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  gap: 35px;
`;

const FirstPageImg = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 6;

  @media (max-width: 1025px) {
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 2;
    grid-row-end: 5;
  }

  @media (max-width: 600px) {
    order: 2;
    width: 100%;
    height: 50%;
  }
`;

const TextBox = styled.h1`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  font-family: "Ledger";
  font-weight: 100;

  @media (max-width: 1025px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const TextBoxMobile = styled.h1`
display: none;

@media (max-width: 1025px) {
  font-size: 35px;
  color: white;
  font-family: "Ledger";
  display: grid;
  place-items: center;
  grid-column-start: 3;
  grid-column-end: 11;
  grid-row-start: 1;
}

@media (max-width: 600px) {
  font-weight: 100;
  display: flex;
  font-size: 25px;
  color: white;
  font-family: "Ledger";
  order 1;
  align-self: center;
}
`;

const ButtonForRooms = styled(Link)`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  font-weight: 700;
  margin: 15px 45px;
  background-color: transparent;
  border: 2px solid white;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: #183717;
    transition: color 1.5s ease;
  }

  @media (max-width: 1025px) {
    font-size: 20px;
    grid-column-start: 3;
    grid-column-end: 11;
    grid-row-start: 5;
    margin: 25px 25px;
  }

  @media (max-width: 600px) {
    align-self: center;
    height: 50px;
    width: 50%;
    order: 3;
  }
`;

const Main = styled.main`
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin-top: 40px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
  }
`;

const OuterDiv = styled.div`
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export default function StartPage() {
  //skapar state för att hålla koll på om sidomenyn är öppen eller stängd
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //funktion som ändrar state för att öppna/stänga sidomenyn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <OuterDiv>
      <Head>
        <NameDiv to="/">
          <Name>
            The<br></br> Haven
          </Name>
          <SubName>Resort and yoga</SubName>
        </NameDiv>
        <Navbar>
          <LinkNav to="yoga">
            <span className="material-symbols-outlined">self_improvement</span>
            Yoga
          </LinkNav>
          <LinkNav to="contact">
            <span className="material-symbols-outlined">call</span>
            Contact
          </LinkNav>
          {/* när användaren klickar på menyikonen så anropas funktionen som gör att state för isMenuOpen ändras och sidomenyn visas */}
          <LinkNavMenu to="#" onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </LinkNavMenu>
        </Navbar>
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </Head>
      <Main>
        <FirstPageImg backgroundImage={hotelRoom}></FirstPageImg>
        <TextBox>
          Discover<br></br>Your<br></br> Sanctury
        </TextBox>
        <TextBoxMobile>Discover Your Sanctury</TextBoxMobile>
        <ButtonForRooms to="/our-rooms">Our Rooms</ButtonForRooms>
      </Main>
    </OuterDiv>
  );
}
