import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const OuterDiv = styled.div`
height: 100%;
overflow-x: hidden;
` 
const Main = styled.main`
height: 100%;
`;

const BackgroundDiv = styled.div`
  background: #efdccc;
  display: flex;
  font-family: "Ledger";
  color: #183717;
  height: 100%;
`;

function App() {
  return (
    <OuterDiv>
      <Header />
      <Main>
      <BackgroundDiv>
        <Outlet />
        </BackgroundDiv>
      </Main>
      </OuterDiv>
  );
}

export default App;
