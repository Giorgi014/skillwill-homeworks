import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import "./Main.css";

const Main = () => {
  return (
    <section className="hero">
      <div className="container hero_inner">
        <div className="hero_content">
          <span className="hero_eyebrow">SkillWill College</span>
          <h1>ისწავლე კოდი წერა, აწყო შენი მომავალი</h1>
          <p>
            პრაქტიკული კურსები Front-End-ში, Back-End-სა და დიზაინში —
            მენტორების მხარდაჭერით და რეალურ პროექტებზე მუშაობით.
          </p>
          <div className="hero_actions">
            <Link to="/courses" className="hero_cta_primary">
              კურსების ნახვა
            </Link>
            <Link to="/about" className="hero_cta_secondary">
              ჩვენ შესახებ
            </Link>
          </div>
        </div>

        <div className="hero_media">
          <img src={heroImage} alt="სტუდენტები კოდზე მუშაობენ" />
        </div>
      </div>
    </section>
  );
};

export default Main;
