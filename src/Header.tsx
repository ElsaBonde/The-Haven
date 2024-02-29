import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkNav, LinkNavMenu } from "./StyledElements";

const Head = styled.header`
  display: flex;
  background: white;
  color: #183717;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  position: sticky;
  top: 0;

  @media (max-width: 600px) {
    padding: 25px 15px;
  }
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

const LinkNavigationMenu = styled(LinkNavMenu)`
  color: #183717;
`;

const LinkNavigation = styled(LinkNav)`
  font-weight: 800;
  color: #183717;
`;

//interface som definerar vad som ska skickas in i Header
interface HeaderProps {
  toggleMenu: () => void;
}

//header-komponenten som skapar en header med en länk till startsidan och en navbar med länkar till yoga och contact samt anrop till toggleMenu
export default function Header({ toggleMenu }: HeaderProps) {
  return (
    <Head>
      <Name to="/">The Haven</Name>
      <Navbar>
        <LinkNavigation to="yoga">
          <span className="material-symbols-outlined">self_improvement</span>
          Yoga
        </LinkNavigation>
        <LinkNavigation to="contact">
          <span className="material-symbols-outlined">call</span>
          Contact
        </LinkNavigation>
        <LinkNavigationMenu to="#" onClick={toggleMenu}>
          <span className="material-symbols-outlined">menu</span>
        </LinkNavigationMenu>
      </Navbar>
    </Head>
  );
}
