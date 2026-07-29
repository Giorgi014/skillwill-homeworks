import { ColorChanger } from "./components/ColorChanger";
import { Counter } from "./components/Counter";
import { LiveInput } from "./components/LiveInput";
import { Toggle } from "./components/Toggle";
import "./App.css";
import { LikeButton } from "./components/LikeButton";

function App() {
  return (
    <>
      <Counter />
      <br />
      <br />
      <Toggle />
      <br />
      <br />
      <LiveInput />
      <br />
      <br />
      <ColorChanger />
      <br />
      <br />
      <LikeButton />
    </>
  );
}

export default App;
