import { useState } from "react";

export const ColorChanger = () => {
  const [color, setColor] = useState("white");

  const colors = ["red", "blue", "green"];

  return (
    <div>
      <div style={{ width: 150, height: 150, backgroundColor: color }} />
      {colors.map((item) => (
        <button key={item} onClick={() => setColor(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
