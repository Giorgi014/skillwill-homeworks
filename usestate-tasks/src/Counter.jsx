import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 0) {
      return 0;
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2 className="counter-value">{count}</h2>
      <div className="counter-buttons">
        <button type="button" onClick={increase}>
          +1
        </button>
        <button type="button" onClick={decrease}>
          -1
        </button>
        <button type="button" onClick={reset}>
          განულება
        </button>
      </div>
    </div>
  );
};

export default Counter;
