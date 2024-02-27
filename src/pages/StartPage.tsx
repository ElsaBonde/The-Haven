import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hotelRoom from "../assets/hotelroom.jpg";
import BackgroundImage from "../assets/maybebackground.jpg";
import SideMenu from "../SideMenu";

const Head = styled.header`
  display: flex;
  color: white;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 28px;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 7px;
  font-weight: 400;
`;
const SubName = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  margin: 0px;
`;

const Navbar = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  gap: 35px;
`;

const LinkNav = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  text-decoration: none;
  color: white;

  &:hover {
    color: #c59267;
    transition: color 1.5s ease;
  }
`;

const FirstPageImg = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 6;
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
  z-index: 1;
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
  z-index: 1;
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
`;

const Main = styled.main`
  display: grid;
  min-height: 80vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin-top: 40px;
`;

const OuterDiv = styled.div`
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export default function StartPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <OuterDiv>
      <Head>
        <NameDiv>
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
          <LinkNav to="#" onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </LinkNav>
        </Navbar>
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </Head>
      <Main>
        <FirstPageImg backgroundImage={hotelRoom}></FirstPageImg>
        <TextBox>
          Discover<br></br>Your<br></br> Sanctury
        </TextBox>
        <ButtonForRooms to="/our-rooms">Our Rooms</ButtonForRooms>
      </Main>
    </OuterDiv>
  );
}
