import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CourseCard } from "../components/CourseCard";
import useCourses from "../context/useCourses";
import "./Course.css";

const Course = () => {
  const { courses, loading, error } = useCourses();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const unique = new Set(courses.map((course) => course.category));
    return ["all", ...unique];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, selectedCategory]);

  return (
    <section className="courses_page">
      <div className="container">
        <header className="courses_page_header">
          <div className="courses_page_header_top">
            <div>
              <h1>კურსები</h1>
              <p>აირჩიე მიმართულება და დაიწყე სწავლა შენს ტემპში.</p>
            </div>
            <Link to="/courses/add" className="courses_page_add">
              + ახალი კურსის დამატება
            </Link>
          </div>
        </header>

        <div className="courses_page_filters">
          <input
            type="text"
            className="courses_page_search"
            placeholder="მოძებნე კურსი სახელით..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="courses_page_categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "courses_page_category courses_page_category--active"
                    : "courses_page_category"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "ყველა" : category}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className="courses_page_status">იტვირთება...</p>}

        {error && (
          <p className="courses_page_status courses_page_status--error">
            {error}
          </p>
        )}

        {!loading && !error && filteredCourses.length === 0 && (
          <p className="courses_page_status">კურსი ვერ მოიძებნა.</p>
        )}

        {!loading && !error && filteredCourses.length > 0 && (
          <div className="courses_page_grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Course;
