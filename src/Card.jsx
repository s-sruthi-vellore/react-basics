import Title from "./CardTitle.jsx";
import Description from "./CardDesc.jsx";
import "./Card.css";

function Card({title = "default title", description ="default desc"}) {
  return (
    <div id="card">
      <Title title={title} />
      <Description description = {description} />
    </div>
  );
}

export default Card;