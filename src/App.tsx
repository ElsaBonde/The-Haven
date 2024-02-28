import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SideMenu from "./SideMenu";

const OuterDiv = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
const Main = styled.main`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`;

const BackgroundDiv = styled.div`
  display: flex;
  font-family: "Ledger";
  color: #183717;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  `;

function App() {
  //state för att hålla koll på om menyn är öppen eller stängd
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //funktion som ändrar state för att öppna och stänga menyn: är den öppen stängs den och vice versa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <OuterDiv>
      <Header toggleMenu={toggleMenu} />
      <Main>
        <BackgroundDiv>
          <Outlet />
        </BackgroundDiv>
      </Main>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </OuterDiv>
  );
}

export default App;
