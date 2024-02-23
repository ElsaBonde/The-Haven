import { useState } from "react";
import styled from "styled-components";
import OutlineHeart from "../assets/heartOutline.png";
import FilledHeart from "../assets/heartFilled.png";

const FlexDiv = styled.div`
flex-basis: 50%;
margin-right: 80px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TextTitle = styled.h1`
  font-size: 30px;
  margin: 10px 0px;
`;

const Text = styled.p`
  font-size: 20px;
  margin: 10px 0px;
`;

const SmallText = styled.p`
border-top: 1px solid #183717;
padding-top: 5px;
font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  margin: 10px 0px;
`;

const LikeDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Heart = styled.div<HeartProps>`
background-image: url(${props => props.isFilled ? FilledHeart : OutlineHeart});
  background-size: cover;
  width: 108px;
  height: 100px;
  cursor: pointer;
  
`;

type HeartProps = {
  isFilled: boolean;
  onClick: () => void;
};

export default function MessageReceived() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <FlexDiv>
     <LikeDiv>
        <Heart isFilled={isLiked} onClick={handleLikeClick}> </Heart>
        </LikeDiv>
      <TextDiv>
        <TextTitle>Thanks for dropping us a line! 🌈 </TextTitle>
        <Text>
          We're on it like Gandhi on a hunger strike. Sit tight, we'll be in
          touch faster than you can spell 'Namaste'!
        </Text>
        
      </TextDiv>
      <SmallText>If you wanna show us some love, press the ❤️-symbol</SmallText>
    </FlexDiv>
  );
}
