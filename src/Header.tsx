import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideMenu from "./SideMenu";

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
    color: #c59267;
    transition: color 1.5s ease;
  }
`;

export default function Header() {
  /* isOpen state */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Head>
      <Name to="/">The Haven</Name>
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
      {/* SIDEBAR isOpen={isOpen} onClose={() => setIsOpen(false)} */}
    </Head>
  );
}
