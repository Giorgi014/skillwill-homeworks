import { useState } from "react";

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>{liked ? "❤️" : "🤍"}</button>
      <p>{count}</p>
    </div>
  );
};
