import "./App.css";
import Playlist from "./components/Playlist.js";
import Newly from "./components/Newly";

function App() {
  return (
    <div className="App">
      <Newly />
      <Playlist />
    </div>
  );
}

export default App;
