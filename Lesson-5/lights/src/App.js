import "./App.css";
import Light from "./Components/Light";
import { useState } from "react";

function App() {
  const [showing, setShowing] = useState(0);

  const handleRotation = () => {
    if (showing === 2) setShowing(0);
    else setShowing(s => s + 1);
  };

  return (
    <div className="App">
      <div className="TrafficLights">
        <Light color={showing === 0 ? "Red Showing" : "Red"} />
        <Light color={showing === 1 ? "Yellow Showing" : "Yellow"} />
        <Light color={showing === 2 ? "Green Showing" : "Green"} />
      </div>
      <button onClick={handleRotation}>Next</button>
    </div>
  );
}

export default App;
