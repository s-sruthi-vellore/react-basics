import Title from "./CardTitle.jsx";
import Description from "./CardDesc.jsx";
import "./Card.css";

function Card() {
  return (
    <div id="card">
      <Title />
      <Description/>
    </div>
  );
}

export default Card;