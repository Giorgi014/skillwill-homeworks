import { useState } from "react";

export const LiveInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setText("")}>Clear</button>
      <p style={text.length > 20 ? { color: "red" } : { color: "black" }}>
        {text}
      </p>
      <p>{text.length}</p>
    </div>
  );
};
