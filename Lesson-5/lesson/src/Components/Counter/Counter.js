import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };
  
  const handleCountDown = () => {
    if (count <= 1) setCount(0);
    else setCount(count - 1);
  }

  return (
    <div className="Counter">
      <button onClick={handleCountUp}> +1</button>
      <h3>{count}</h3>
      <button onClick={handleCountDown}> -1</button>
    </div>
  );
}
