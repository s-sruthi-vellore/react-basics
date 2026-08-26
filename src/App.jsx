import "./App.css"
import Card from "./Card.jsx";

function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
