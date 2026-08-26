import "./App.css"

function Title() {
  return (
    <h1>I am the Title!</h1>
  );
}

function App() {
  return (
    <div>
      <h1> This is my App component</h1>
      <p>inside app component we have : </p>
      <Title/>
    </div>
  );
}

export default App;
