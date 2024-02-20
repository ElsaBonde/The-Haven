import { useParams } from "react-router-dom";
import { mockedRoom } from "../rooms";

export default function Header() {
  const params = useParams();
  const room = mockedRoom.find((room) => room.id === params.id);

  if (!room) {
    return (
      <div>
        <h1>This room does not longer exist.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>ProductPage</h1>
      {room.title}
      {room.subtitle}
      {room.description}
    </div>
  );
}
