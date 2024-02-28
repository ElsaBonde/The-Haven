import { Link } from "react-router-dom";
import styled from "styled-components";
import SideImage from "./assets/waterfall.jpg";

const SideMenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: #183717;
  transition: right 1.2s ease;
  z-index: 999;
`;

const Head = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  color: white;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  z-index: 2;
`;

const NameDiv = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 600px) {
    display: none;
  }
`;

const Main = styled.main`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

const GridDiv = styled.div`
  flex-basis: 60%;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url(${SideImage});
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  @media (max-width: 600px) {
    display: none;
  }
`;

const Info = styled.div`
  grid-column-start: 9;
  grid-column-end: 11;
  grid-row-start: 11;
  font-family: "Karla", sans-serif;
  color: white;
`;

const FatText = styled.p`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 15px;
  margin-bottom: 5px;
`;

const MapsLink = styled(Link)`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 15px;
  text-decoration: none;
  color: white;

  &:hover {
    transform: translateX(10px);
    color: #c59267;
    transition: color 1.5s ease;
  }
`;

const SmallText = styled.p`
  margin: 0;
  font-size: 14px;
  margin-bottom: 15px;
`;

const NavDiv = styled.div`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #183717;

  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  border-left: 1px solid white;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  margin-top 10px;
  margin-left: 20px;

  &:hover {
    transform: translateX(10px);
    color: #c59267;
    transition: color 1.5s ease;
  }
`;

const LinkNavMenu = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 800;
  text-decoration: none;
  color: white;

  &:hover {
    color: #c59267;
    transition: color 1.5s ease;
  }
`;

// interface för att skicka in props till komponenten
interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

//komponenten för sidomenyn som visas när användaren klickar på menyn (dom tre strecken, hamburgare)
const SideMenu = ({ isOpen, toggleMenu }: SideMenuProps) => {
  return (
    <SideMenuContainer isOpen={isOpen}>
      <Head>
        <NameDiv to="/">
          <Name>
            The<br></br> Haven
          </Name>
          <SubName>Resort and yoga</SubName>
        </NameDiv>
        <Navbar>
          <LinkNav to="/yoga" onClick={toggleMenu}>
            <span className="material-symbols-outlined">self_improvement</span>
            Yoga
          </LinkNav>
          <LinkNav to="/contact" onClick={toggleMenu}>
            <span className="material-symbols-outlined">call</span>Contact
          </LinkNav>
          <LinkNavMenu to="#" onClick={toggleMenu}>
            <span className="material-symbols-outlined">close</span>
          </LinkNavMenu>
        </Navbar>
      </Head>
      <Main>
        <GridDiv>
          <Info>
            <FatText>Locate us</FatText>
            <SmallText>
              Solgården 21, Alafors<br></br>44951 Sweden
            </SmallText>
            {/* googlemaps länk till platsen (min adress så länge som exempel) */}
            <MapsLink to="https://www.google.com/maps/place/Solg%C3%A5rden+21,+449+51+Alafors/@57.9252763,12.0966777,17z/data=!3m1!4b1!4m6!3m5!1s0x46455c536d313741:0x69500b778a623863!8m2!3d57.9252763!4d12.0992526!16s%2Fg%2F11v15scn9p?entry=ttu">
              Get Directions &gt;
            </MapsLink>
          </Info>
        </GridDiv>
        <NavDiv>
          <LinksList>
            <NavLink to="/our-rooms" onClick={toggleMenu}>Our Rooms</NavLink>
            <NavLink to="/yoga" onClick={toggleMenu}> Yoga</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>Connect With Us</NavLink>
            <NavLink to="/inspirational-quotes" onClick={toggleMenu}>Inspirational Quotes</NavLink>
          </LinksList>
        </NavDiv>
      </Main>
    </SideMenuContainer>
  );
};

export default SideMenu;
