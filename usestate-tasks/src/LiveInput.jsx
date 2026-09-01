import { useState } from "react";

const LiveInput = () => {
  const [text, setText] = useState("");
  const [upperCase, setUpperCase] = useState(false);

  const clearText = () => {
    setText("");
  };

  return (
    <div className="live-input">
      <textarea
        value={text}
        onChange={(e) => {
          if (e.target.value.length <= 100) {
            setText(e.target.value);
          }
        }}
        placeholder="დაწერე ტექსტი..."
      />
      <button type="button" onClick={clearText}>
        გასუფთავება
      </button>
      <label>
        <input
          type="checkbox"
          checked={upperCase}
          onChange={() => setUpperCase(!upperCase)}
        />
        დიდი ასოები
      </label>
      <p>
        {text
          ? upperCase
            ? text.toUpperCase()
            : text
          : "ჯერ არაფერი დაგიწერია"}
      </p>
    </div>
  );
};

export default LiveInput;
