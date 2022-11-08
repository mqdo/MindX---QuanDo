import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [words, setWords] = useState(0);

  useEffect(() => {
    const wordCounter = (e) => {
      const input = e.target.value;
      const count = input === "" ? 0 : input.replace(/\s+/, " ").split(" ").length;
      setWords(count);
    };
    const textField = document.getElementById("text-field");
    textField.addEventListener("keyup", debounce(wordCounter));
    return () => {
      textField.removeEventListener("keyup", debounce(wordCounter));
    };
  }, [words]);

  return (
    <div className="App">
      <h1>Word counter</h1>
      <textarea
        name="text-field"
        id="text-field"
        rows="10"
        placeholder="Input here..."
      ></textarea>
      <p>{"Word(s): " + words}</p>
    </div>
  );
}

export default App;

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
