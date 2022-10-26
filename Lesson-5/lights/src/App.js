import "./App.css";
import Light from "./Components/Light";
import { useState } from "react";

function App() {
  const [showing, setShowing] = useState("red-light");

  const handleRotation = () => {
    switch (showing) {
      case "green-light":
        setShowing("red-light");
        break;
      case "yellow-light":
        setShowing("green-light");
        break;
      default:
        setShowing("yellow-light");
        break;
    }
  };

  return (
    <div className="App">
      <div className="traffic-lights">
        <Light color="bg-red" turnOn={showing === "red-light"} />
        <Light color="bg-yellow" turnOn={showing === "yellow-light"} />
        <Light color="bg-green" turnOn={showing === "green-light"} />
      </div>
      <button onClick={handleRotation}>Next</button>
    </div>
  );
}

export default App;
