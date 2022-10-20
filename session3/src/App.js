import "./App.css";

const data = [
  "Clean up bedroom",
  "Buy some milk",
  "Jogging",
  "Learn React",
  "Doing exercise",
];

function App() {
  return (
    <div className="App">
      <input id="add_todo" type="text" placeholder="Enter your task here..." />
      <div className="list">
        {data.map((elem, index) => {
          const attr = elem.split(" ").join("_").toLowerCase();
          return (
            <div className="todo" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                name={attr}
                id={attr}
                value={index}
              />
              <label htmlFor={attr}>{elem}</label>
            </div>
          );
        })}
      </div>
      <footer>
        <span>{data.length} task(s) left!</span>
        <span>MindX todolist</span>
      </footer>
    </div>
  );
}

export default App;