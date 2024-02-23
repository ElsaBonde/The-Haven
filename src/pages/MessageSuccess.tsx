import styled from "styled-components";

const TextDiv = styled.div`
  flex-basis: 50%;
  flex-grow: 1;
  margin: 80px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h1`
font-size: 40px;
margin: 10px 0px; 
`;

export default function MessageReceived() {
  return <>
  <TextDiv>
    <Text>Thank you for your message!</Text>
    </TextDiv></>;
}
