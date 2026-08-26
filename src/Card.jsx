import Title from "./CardTitle.jsx";
import Description from "./CardDesc.jsx";
import "./Card.css";

function Card() {
  let name = "Sruthi";
  return (
    <div id="card">
      <Title />
      <Description />
      <p>Hi, {name.toUpperCase}</p>
    </div>
  );
}

export default Card;