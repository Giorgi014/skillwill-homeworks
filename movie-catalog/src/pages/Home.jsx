import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import hero from "../assets/hero.png";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const { movies } = useMovies();
  const watchlistCount = useSelector((state) => state.watchlist.items.length);
  const genreCount = new Set(movies.map((m) => m.genre)).size;

  return (
    <section className="hero">
      <div className="hero__backdrop">
        <img src={hero} alt="" />
      </div>
      <div className="hero__content">
        <span className="eyebrow">კინოკატალოგი</span>
        <h1 className="hero__title">
          იპოვე შენი შემდეგი <em>ფილმი</em>
        </h1>
        <p className="hero__subtitle">
          დაათვალიერე ფილმებისა და სერიალების კატალოგი, გაფილტრე ჟანრის
          მიხედვით და შეინახე საყვარელი სათაურები შენს პირად სიაში.
        </p>
        <div className="hero__actions">
          <Link to="/movies" className="btn btn--primary">
            ფილმების ნახვა
          </Link>
          <Link to="/about" className="btn btn--ghost">
            ჩვენ შესახებ
          </Link>
        </div>
        <div className="hero__stats">
          <div>
            <div className="hero__stat-value">{movies.length}</div>
            <div className="hero__stat-label">სათაური</div>
          </div>
          <div>
            <div className="hero__stat-value">{genreCount}</div>
            <div className="hero__stat-label">ჟანრი</div>
          </div>
          <div>
            <div className="hero__stat-value">{watchlistCount}</div>
            <div className="hero__stat-label">ჩემს სიაში</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
