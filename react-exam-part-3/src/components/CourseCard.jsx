import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import "./CourseCard.css";

export const CourseCard = ({ course }) => {
  const { id, icon, title, description, level, duration, price, instructor } = course;

  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favorites.items.some((item) => item.id === id)
  );

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    dispatch(toggleFavorite(course));
  };

  return (
    <article className="course_card">
      <button
        type="button"
        className={
          isFavorite
            ? "course_card_favorite course_card_favorite--active"
            : "course_card_favorite"
        }
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? "ფავორიტებიდან წაშლა" : "ფავორიტებში დამატება"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <Link to={`/courses/${id}`} className="course_card_link">
        <div className="course_card_icon" aria-hidden="true">
          {icon}
        </div>

        <h3 className="course_card_title">{title}</h3>
        <p className="course_card_description">{description}</p>

        {instructor && <p className="course_card_instructor">მენტორი: {instructor}</p>}

        <div className="course_card_meta">
          <span className="course_card_badge">{level}</span>
          <span className="course_card_duration">{duration}</span>
        </div>

        {price != null && <p className="course_card_price">{price} ₾</p>}
      </Link>
    </article>
  );
};
