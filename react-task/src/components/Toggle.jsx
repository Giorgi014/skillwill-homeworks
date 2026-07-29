import { useState } from "react";

export const Toggle = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "დამალვა" : "ჩვენება"}
      </button>
      {show && <p>გამარჯობა!</p>}
    </div>
  );
};
