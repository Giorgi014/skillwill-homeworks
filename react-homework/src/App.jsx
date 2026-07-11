import { RegisterForm } from "./components/RegisterForm";
import { Header } from "./components/Header";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <RegisterForm />
      <UsersList />
    </div>
  );
}

export default App;
