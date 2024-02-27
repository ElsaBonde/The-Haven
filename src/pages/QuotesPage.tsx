import { useEffect, useState } from "react";
import styled from "styled-components";

const QuotesDiv = styled.div`
background-color: rgba(255, 255, 255, 0.7);
border-radius: 5px;
text-align: center;
`;

const Quote = styled.p`
padding: 15px 15px 0px 15px;
font-size: 18px;`;

const Author = styled.p`
padding: 10px 15px 15px 15px;
font-size: 14px;`;

export default function QuotesPage() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed networks issue. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div>
      <QuotesDiv>
      <Quote>" {quote} "</Quote>
      <Author>- {author}</Author>
      </QuotesDiv>
      <button onClick={handleNewQuote}>Show another quote</button>
    </div>
  );
}
