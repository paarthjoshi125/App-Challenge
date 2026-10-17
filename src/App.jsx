import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <div>
      <h1>App</h1>
      <h2>Recycling locations</h2>
      <div className="cardholder">
        <Card>
          <h3>Place 1</h3>
        </Card>
        <Card>
          <h3>Place 2</h3>
        </Card>
        <Card>
          <h3>Place 3</h3>
        </Card>
      </div>
    </div>
  );
}

export default App;
