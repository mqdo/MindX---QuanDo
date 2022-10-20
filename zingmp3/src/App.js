import "./App.css";
import Today from "./components/Today.js";
import Newly from "./components/Newly";

function App() {
  return (
    <div className="App">
      <Newly />
      <Today />
    </div>
  );
}

export default App;
