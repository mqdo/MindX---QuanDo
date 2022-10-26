import "./App.css";
import Counter from "./Components/CounterClass/CounterClass";
import CounterClass from "./Components/CounterClass/CounterClass";
import Student from "./Components/Student/Student";
import StudentClass from "./Components/StudentClass/StudentClass";

function App() {
  return <div className="App">
    <h2>Counter</h2>
    <Counter />
    <h2>Counter Class</h2>
    <CounterClass />
    <h2>Student</h2>
    <Student />
    <h2>Student Class</h2>
    <StudentClass />
  </div>;
}

export default App;
