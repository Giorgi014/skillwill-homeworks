import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useCourses from "../context/useCourses";
import { toggleFavorite } from "../store/favoritesSlice";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses, loading, error } = useCourses();
  const dispatch = useDispatch();

  const course = courses.find((item) => String(item.id) === id);

  const isFavorite = useSelector((state) =>
    state.favorites.items.some((item) => item.id === course?.id)
  );

  if (loading) {
    return (
      <section className="course_details">
        <div className="container">
          <p className="course_details_status">იტვირთება...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="course_details">
        <div className="container">
          <p className="course_details_status course_details_status--error">{error}</p>
        </div>
      </section>
    );
  }

  if (!course) {
    return (
      <section className="course_details">
        <div className="container">
          <p className="course_details_status">კურსი ვერ მოიძებნა.</p>
          <Link to="/courses" className="course_details_back">
            ← კურსების სიაში დაბრუნება
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="course_details">
      <div className="container">
        <Link to="/courses" className="course_details_back">
          ← კურსების სიაში დაბრუნება
        </Link>

        <div className="course_details_card">
          <div className="course_details_icon" aria-hidden="true">
            {course.icon}
          </div>

          <h1 className="course_details_title">{course.title}</h1>
          <p className="course_details_description">{course.description}</p>

          <dl className="course_details_meta">
            <div>
              <dt>დონე</dt>
              <dd>{course.level}</dd>
            </div>
            <div>
              <dt>ხანგრძლივობა</dt>
              <dd>{course.duration}</dd>
            </div>
            <div>
              <dt>მენტორი</dt>
              <dd>{course.instructor}</dd>
            </div>
            <div>
              <dt>ღირებულება</dt>
              <dd>{course.price} ₾</dd>
            </div>
          </dl>

          <button
            type="button"
            className={
              isFavorite
                ? "course_details_favorite course_details_favorite--active"
                : "course_details_favorite"
            }
            onClick={() => dispatch(toggleFavorite(course))}
          >
            {isFavorite ? "♥ ფავორიტებშია" : "♡ ფავორიტებში დამატება"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
