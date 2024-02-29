import { useEffect, useState } from "react";
import styled from "styled-components";
import {Button} from "../StyledElements";
import PalmLeaves from "../assets/palmleaves.jpg";

const BackgroundDiv = styled.div`
  background-image: url(${PalmLeaves});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParentContainer = styled.div`
  background: #efdccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 0px;
  height: 100%;
  width: 55%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TextDiv = styled.div`
  padding: 0px 35px;

  @media (max-width: 600px) {
    padding: 0px 10px;
  }
`;

const Title = styled.h1`
  font-size: 25px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-size: 17px;
  margin: 0px;
`;

const QuotesDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  width: 90%;
  margin-top: 20px;

  &:hover {
    background-color: white;
    transition: background-color 1.5s ease;
  }
`;

const Quote = styled.p`
  font-style: italic;
  margin: 0px;
  padding: 10px 10px 0px 10px;
  font-size: 17px;
`;

const Author = styled.p`
  margin: 0px;
  padding: 10px;
  font-size: 14px;
`;

const GenerateButton = styled(Button)`
  margin: 0px;
  padding: 15px;
  width: 35%;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export default function QuotesPage() {
  /*state för att hålla koll på quote och author i aktuellt citat*/
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  /*useEffect används för att fetcha en quote från API:et när sidan laddas*/
  useEffect(() => {
    fetchQuote();
  }, []);

  /*funktionen som fetchar en quote från API:et*/
  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      /*om det inte går att hämta datan, skrivs ett felmeddelande ut annars visa det*/
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed networks issue. Please try again later.");
        }
        return response.json();
      })
      /*sätter quote och author till datan som hämtats*/
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      /*om det blir fel vid fetch, skrivs felmeddelande och felet ut i konsolen*/
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <BackgroundDiv>
      <ParentContainer>
        <TextDiv>
          <Title>Embrace the wisdom of the ages, one quote at a time.</Title>
          <Text>
            Welcome to our sanctuary of inspiration, where words weave magic and
            thoughts take flight. Let each quote be a gentle reminder of the
            beauty that surrounds us and the strength that lies within.<br></br>
            <br></br> Here, amidst the pages of timeless wisdom, find solace,
            find courage, find joy. Allow these words to ignite your spirit,
            illuminate your path, and inspire your journey.<br></br>
            <br></br> Enter with an open heart, and leave with a soul uplifted.
            Let the journey begin.
          </Text>
        </TextDiv>

        <QuotesDiv>
          <Quote>"{quote}"</Quote>
          <Author>- {author}</Author>
        </QuotesDiv>
        <GenerateButton onClick={handleNewQuote}>Generate another quote</GenerateButton>
      </ParentContainer>
    </BackgroundDiv>
  );
}
