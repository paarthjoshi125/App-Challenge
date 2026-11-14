import "./App.css";
import Card from "./components/Card";
import QA from "./components/Q&A/accordion"; 
function App() {
  return (
    <div>
      <h1>App</h1>
      <Card>
        <h3>Card 1</h3>
      </Card>
      <QA></QA>
    </div>
  );
}

export default App;
