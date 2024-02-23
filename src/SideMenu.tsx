import { Link } from "react-router-dom";
import styled from "styled-components";
import SideImage from "./assets/waterfall.jpg";

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

export default function SideMenu() {
  return (
    <>
      <Head>
        <NameDiv to="/">
          <Name>
            The<br></br> Haven
          </Name>
          <SubName>Resort and yoga</SubName>
        </NameDiv>
        <Navbar>
          <LinkNav to="/yoga">
            <span className="material-symbols-outlined">self_improvement</span>
            Yoga
          </LinkNav>
          <LinkNav to="/contact">
            <span className="material-symbols-outlined">call</span>Contact
          </LinkNav>
          <LinkNav to="menu">
            <span className="material-symbols-outlined">close</span>
          </LinkNav>
        </Navbar>
      </Head>
      <Main>
        <GridDiv>
          <Info>
            <FatText>Locate us</FatText>
            <SmallText>
              Solgården 21, Alafors<br></br>44951 Sweden
            </SmallText>
            <MapsLink to="https://www.google.com/maps/place/Solg%C3%A5rden+21,+449+51+Alafors/@57.9252763,12.0966777,17z/data=!3m1!4b1!4m6!3m5!1s0x46455c536d313741:0x69500b778a623863!8m2!3d57.9252763!4d12.0992526!16s%2Fg%2F11v15scn9p?entry=ttu">
              Get Directions &gt;
            </MapsLink>
          </Info>
        </GridDiv>
        <NavDiv>
          <LinksList>
            <NavLink to="/our-rooms">Our Rooms</NavLink>
            <NavLink to="/yoga"> Yoga</NavLink>
            <NavLink to="/contact">Connect With Us</NavLink>
            <NavLink to="/inspirational-quotes">Inspirational Quotes</NavLink>
          </LinksList>
        </NavDiv>
      </Main>
    </>
  );
}
