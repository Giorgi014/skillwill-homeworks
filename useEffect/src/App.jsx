import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [getJoke, setGetJoke] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;
    const apiFetch = async () => {
      try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
        const data = await res.json();
        console.log(data);

        setGetJoke(data);
      } catch (err) {
        console.error(err);
      }
    };

    apiFetch();
  }, [shouldFetch]);

  const handleJoke = () => {
    setShouldFetch((prev) => !prev);
  };

  return (
    <div>
      {getJoke && <h1>{getJoke.joke}</h1>}
      <button onClick={handleJoke}>Get new joke</button>
    </div>
  );
}

export default App;
