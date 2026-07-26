import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const Home = lazy(() => import("./page/Home.jsx"));
const About = lazy(() => import("./page/About.jsx"));
const Admin = lazy(() => import("./page/Admin.jsx"));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 16, padding: 16 }}>
        <Link to="/">მთავარი</Link>
        <Link to="/about">ჩვენ შესახებ</Link>
        <Link to="/admin">ადმინი</Link>
      </nav>
      <Suspense fallback={<div style={{ padding: 16 }}>იტვირთება...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
