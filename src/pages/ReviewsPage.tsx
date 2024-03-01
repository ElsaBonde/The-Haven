import styled from "styled-components";
import Leaves from "../assets/leaves.jpg";
import { mockedReview } from "../MockedReviews";

const BackgroundDiv = styled.div`
  background-image: url(${Leaves});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterDiv = styled.div`
  background: #efdccc;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0px;
  height: 100%;
  width: 55%;
  overflow-y: auto;

  @media (max-width: 1025px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 35px auto 10px;
  padding-left: 35px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const ReviewBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;

  &:hover {
    background-color: white;
    transition: background-color 1.5s ease;
  }
`;

const MessageTag = styled.p`
  font-style: italic;
  padding: 0px 20px;
`;

const Stars = styled.p`
  font-size: 17px;
  padding: 10px 20px 0px 20px;
  margin: 0px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StarColor = styled.span`
  color: #c59267;
  padding-left: 5px;
  line-height: 22px; /* Höjden på texten */
`;

const NameTag = styled.p`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  padding: 0px 20px 10px 20px;
  margin: 0px;
  font-size: 15px;
  font-weight: bold;
  align-self: end;
`;

export default function ReviewsPage() {
  return (
    <BackgroundDiv>
      <OuterDiv>
        <Title>Guest Experiences on The Haven:</Title>
        {mockedReview.map((review) => (
          <div key={review.id}>
            <ReviewBox>
              <Stars>
                {review.stars} / 5{" "}
                <StarColor className="material-symbols-outlined">
                  star
                </StarColor>
              </Stars>
              <MessageTag>"{review.message}"</MessageTag>
              <NameTag>- {review.name}</NameTag>
            </ReviewBox>
          </div>
        ))}
      </OuterDiv>
    </BackgroundDiv>
  );
}
