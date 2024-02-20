import styled from "styled-components";
import greenPhone from "./assets/greenphone.png";
import greenYoga from "./assets/greenyoga.png";
import hamburgerMenu from "./assets/hamburgermenu.png"

const Head = styled.header`
  display: flex;
  background: white;
  color: #183717;
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
`;

const Name = styled.h1`
  font-size: 25px;
  letter-spacing: 3px;
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
font-weight: 800;`

const ImgNav = styled.div<{ backgroundImage: string }>`
  width: 18px;
  height: 18px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

const HamburgerMenu= styled.div<{ backgroundImage: string }>`
  width: 30px;
  height: 18px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

export default function Header() {
  return (
    <Head>
      <Name>The Haven</Name>
      <Navbar>
        <LinkNav>
          <ImgNav backgroundImage={greenYoga} />
          Yoga
        </LinkNav>
        <LinkNav>
          <ImgNav backgroundImage={greenPhone} />
          Contact
        </LinkNav>
        <LinkNav><HamburgerMenu backgroundImage={hamburgerMenu} /></LinkNav>
      </Navbar>
    </Head>
  );
}
