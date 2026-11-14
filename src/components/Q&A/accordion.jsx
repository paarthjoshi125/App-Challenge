import "./style.css";
import { useState } from "react";

export default function QA() {
  const [isClicked1, setIsClicked1] = useState(false);
  const handle_click1 = (event) => {
    setIsClicked1(!isClicked1);
    console.log("check", event.target);
  };
  const [isClicked2, setIsClicked2] = useState(false);
  const handle_click2 = (event) => {
    setIsClicked2(!isClicked2);
    console.log("check", event.target);
  };
  const [isClicked3, setIsClicked3] = useState(false);
  const handle_click3 = (event) => {
    setIsClicked3(!isClicked3);
    console.log("check", event.target);
  };
  return (
    <div>
      <h2>Common Questions</h2>
      <button class="accordion" onClick={handle_click1}>
        Section 1
      </button>
      {isClicked1 && (
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}

      <button class="accordion" onClick={handle_click2}>
        Section 2
      </button>
      {isClicked2 && (
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}
      <button class="accordion" onClick={handle_click3}>
        Section 3
      </button>
      {isClicked3 && (
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}
    </div>
  );
}
