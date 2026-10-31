import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>App</h1>
      <Card>
        <h3>Card 1</h3>
      </Card>
    </div>
  );
}

export default App;
