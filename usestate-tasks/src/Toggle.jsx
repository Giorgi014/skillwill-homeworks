import { useState } from "react";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="toggle">
      <p className="toggle-text">
        {isOpen ? "ტექსტი ნაჩვენებია" : "ტექსტი დამალულია"}
      </p>

      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "დამალვა" : "ჩვენება"}
      </button>
    </div>
  );
};

export default Toggle;
