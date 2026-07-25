import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import "./App.css";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="about" element={<About />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="add-movie" element={<AddMovie />} />
      </Route>
    </Routes>
  );
}

export default App;
