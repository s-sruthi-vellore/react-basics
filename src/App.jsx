import "./App.css"
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
import "./Product.css";
function App() {
  return (
    <>
      <MsgBox userName="Sruthi" textColor="blue" />
      <MsgBox userName="Jaya" textColor="green" />
      <MsgBox userName="Karthik" textColor="yellow" />
      <MsgBox userName="Shankar" textColor="red" />
    </>
  );
}

export default App;
