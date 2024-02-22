import { Link } from "react-router-dom";
import styled from "styled-components";
import greenPhone from "./assets/greenphone.png";
import greenYoga from "./assets/greenyoga.png";
import hamburgerMenu from "./assets/hamburgermenu.png";

const Head = styled.header`
  display: flex;
  background: white;
  color: #183717;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  margin: 20px 30px;
`;

const Name = styled(Link)`
  font-size: 25px;
  letter-spacing: 3px;
  text-decoration: none;
  color: #183717;
  font-weight: 600;
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
  font-weight: 800;
  text-decoration: none;
  color: #183717;


  &:hover {
    color: #C59267;
    transition: color 1.5s ease;
  }
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

export default function Header() {
  return (
    <Head>
      <Name to="/">The Haven</Name>
      <Navbar>
        <LinkNav to="yoga">
          <ImgNav backgroundImage={greenYoga} />
          Yoga
        </LinkNav>
        <LinkNav to="contact">
          <ImgNav backgroundImage={greenPhone} />
          Contact
        </LinkNav>
        <LinkNav to="menu">
          <HamburgerMenu backgroundImage={hamburgerMenu} />
        </LinkNav>
      </Navbar>
    </Head>
  );
}
