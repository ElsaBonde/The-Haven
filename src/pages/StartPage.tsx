import styled from "styled-components";
import hamburgerMenu from "../assets/hamburgermenu.png";
import hotelRoom from "../assets/hotelroom.jpg";
import BackgroundImage from "../assets/maybebackground.jpg";
import whitePhone from "../assets/whitephone.png";
import whiteYoga from "../assets/whiteyoga.png";

const Head = styled.header`
  display: flex;
  color: white;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  margin: 0px 30px;
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

const LinkNav = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 800;
`;

const ImgNav = styled.div<{ backgroundImage: string }>`
  width: 18px;
  height: 18px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

const HamburgerMenu = styled.div<{ backgroundImage: string }>`
  width: 30px;
  height: 18px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
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
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  font-family: "Ledger";
  font-weight: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 90%;
  z-index: 1;
`;

const ButtonForRooms = styled.button`
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 1;
  background-color: transparent;
  border: 2px solid white;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  border-radius: 3px;
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
  overflow-x: hidden;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export default function StartPage() {
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
          <LinkNav>
            <ImgNav backgroundImage={whiteYoga} />
            Yoga
          </LinkNav>
          <LinkNav>
            <ImgNav backgroundImage={whitePhone} />
            Contact
          </LinkNav>
          <LinkNav>
            <HamburgerMenu backgroundImage={hamburgerMenu} />
          </LinkNav>
        </Navbar>
      </Head>
      <Main>
        <FirstPageImg backgroundImage={hotelRoom}></FirstPageImg>
        <TextBox>
          Discover<br></br>Your<br></br> Sanctury
        </TextBox>
        <ButtonForRooms>Our Rooms</ButtonForRooms>
      </Main>
    </OuterDiv>
  );
}
