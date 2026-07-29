import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const sum = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={sum}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
