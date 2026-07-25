import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const links = [
  { to: "/", label: "მთავარი", end: true },
  { to: "/courses", label: "კურსები" },
  { to: "/about", label: "ჩვენ შესახებ" },
];

export const Navbar = () => {
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  return (
    <header className="navbar">
      <div className="container navbar_inner">
        <NavLink to="/" className="navbar_brand">
          <img src="/favicon.svg" alt="" className="navbar_logo" />
          <span>SkillWill</span>
        </NavLink>

        <nav>
          <ul className="navbar_links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? "navbar_link navbar_link--active" : "navbar_link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar_actions">
          <NavLink to="/courses" className="navbar_favorites" aria-label="ფავორიტები">
            ♥
            {favoritesCount > 0 && (
              <span className="navbar_favorites_count">{favoritesCount}</span>
            )}
          </NavLink>

          <NavLink to="/courses" className="navbar_cta">
            დაწყება
          </NavLink>
        </div>
      </div>
    </header>
  );
};
