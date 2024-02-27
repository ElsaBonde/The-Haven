import { useState } from "react";
import styled from "styled-components";
import MessageForm from "./MessageForm";
import MessageSuccess from "./MessageSuccess";

const TextDiv = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
`;

const SiteTitle = styled.p`
  font-size: 40px;
  margin: 10px 0px;
`;

const SmallText = styled.p`
  font-size: 17px;
  margin: 5px 0px;
`;

const SecondTitle = styled.p`
  font-size: 25px;
  margin: 18px 0px 10px 0px;
`;

const Line = styled.div`
  width: 2px;
  height: 70%;
  background-color: #183717;
  margin: auto 80px;
`;

export default function ContactPage() {
  //state för att visa messageSent eller MessageForm
  const [messageSent, setMessageSent] = useState(false);

  //funktion som sätter messageSent till true och därmed visar MessageSuccess
  const handleMessageSent = () => {
    setMessageSent(true);
  };

  return (
    <>
      <TextDiv>
        <SiteTitle>Get in touch with us</SiteTitle>
        <SmallText>
          We're delighted to hear from you! Whether you have questions about our
          resort facilities, yoga classes, or would simply like to say hello,
          we're here to help. Feel free to reach out to us via the form or
          directly at our contact information provided. Our dedicated team is
          committed to providing you with a memorable experience.
        </SmallText>
        <SecondTitle>Contact Information:</SecondTitle>
        <SmallText>
          Address: Solgården 21, Alafors, 44951 Sweden<br></br>
          Phone: +46 73 893 94 75<br></br>
          Email: info@thehaven.com <br></br>
          <br></br>
          Thank you for considering The Haven for your wellness retreat!
        </SmallText>
      </TextDiv>
      <Line></Line>
      {/* om messageSent är true visas MessageSuccess, annars MessageForm */}
      {messageSent ? (
        <MessageSuccess />
      ) : (
        <MessageForm onMessageSent={handleMessageSent} />
      )}
    </>
  );
}
