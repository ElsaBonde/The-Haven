import room1Image from "./assets/room1.png";
import room2Image from "./assets/room2.png";
import room3Image from "./assets/room3.png";

export interface Room {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const mockedRoom: Room[] = [
  {
    id: "1",
    image: room1Image,
    title: "Nature Room",
    subtitle: "Inspired by the mighty nature",
    description:
      "Harmonious double room for those seeking to connect with nature whether indoors or outdoors.<br><br>  Private veranda overlooking the forest, perfect for practicing yoga exercises.",
  },
  {
    id: "2",
    image: room2Image,
    title: "Flower And Garden Room",
    subtitle: "Embrace nature's beauty",
    description:
      "Immerse yourself in the beauty of our garden oasis in this charming double room. <br><br> Adorned with floral accents and overlooking lush greenery, it's a haven of serenity and rejuvenation.",
  },
  {
    id: "3",
    image: room3Image,
    title: "Luxury Room",
    subtitle: "Indulge in opulence and comfort",
    description:
      "Experience unparalleled luxury in our exquisite double room with balcony and windows overlooking the waterfall.<br><br> Elegant furnishings and modern amenities await, providing a serene retreat for relaxation.",
  },
];
