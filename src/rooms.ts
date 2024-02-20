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
    image: "../assets/room1.png",
    title: "Nature Room",
    subtitle: "Inspired by the mighty nature",
    description:
      "Harmonious double room for those seeking to connect with nature whether indoors or outdoors. Private veranda overlooking the forest, perfect for practicing yoga exercises.",
  },
  {
    id: "2",
    image: "../assets/room2.png",
    title: "Flower And Garden Room",
    subtitle: "Embrace nature's beauty",
    description:
      "Immerse yourself in the beauty of our garden oasis in this charming double room. Adorned with floral accents and overlooking lush greenery, it's a haven of serenity and rejuvenation.",
  },
  {
    id: "3",
    image: "../assets/room3.png",
    title: "Luxury Room",
    subtitle: "Indulge in opulence and comfort",
    description:
      "Experience unparalleled luxury in our exquisite double room with balcony and windows overlooking the waterfall. Elegant furnishings and modern amenities await, providing a serene retreat for relaxation.",
  },
];
