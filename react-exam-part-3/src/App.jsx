import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import Main from "./page/Main";
import Course from "./page/Course";
import CourseDetails from "./page/CourseDetails";
import About from "./page/About";
import AddCourse from "./page/AddCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="courses" element={<Course />} />
          <Route path="courses/add" element={<AddCourse />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
