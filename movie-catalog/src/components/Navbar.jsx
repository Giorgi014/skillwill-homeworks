import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const count = useSelector((state) => state.watchlist.items.length);

  return (
    <nav className="navbar">
      <NavLink to="/" end className="navbar__brand">
        კინოკატალოგი
      </NavLink>
      <NavLink to="/" end>
        მთავარი
      </NavLink>
      <NavLink to="/movies">ფილმები/სერიალები</NavLink>
      <NavLink to="/about">ჩვენ შესახებ</NavLink>
      <NavLink to="/add-movie">ახალი ფილმის დამატება</NavLink>
      <span className="navbar__ticket">ჩემი სია ({count})</span>
    </nav>
  );
};
