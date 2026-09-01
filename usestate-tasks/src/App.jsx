import "./App.css";
import Counter from "./Counter";
import LiveInput from "./LiveInput";
import ProductFilter from "./ProductFilter";
import SignupForm from "./SignupForm";
import TaskList from "./TaskList";
import Toggle from "./Toggle";

function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <LiveInput />
      <TaskList />
      <SignupForm />
      <ProductFilter />
    </>
  );
}

export default App;
