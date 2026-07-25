import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer_inner">
        <div>
          <p className="footer_brand">SkillWill</p>
          <p className="footer_tagline">ისწავლე ის, რაც მართლა გამოგადგება.</p>
        </div>

        <nav>
          <ul className="footer_links">
            <li>
              <Link to="/">მთავარი</Link>
            </li>
            <li>
              <Link to="/courses">კურსები</Link>
            </li>
            <li>
              <Link to="/about">ჩვენ შესახებ</Link>
            </li>
          </ul>
        </nav>

        <p className="footer_copy">© {year} SkillWill. ყველა უფლება დაცულია.</p>
      </div>
    </footer>
  );
};
