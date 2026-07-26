import { memo, useCallback, useMemo, useState } from "react";
import { products } from "../data";

const PAGE_SIZE = 40;

const ProductCard = memo(function ProductCard({ product, onAdd }) {
  console.log("render:", product.id);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 8,
        width: "300px",
        height: "auto",
      }}
    >
      <img
        src={`https://picsum.photos/seed/${product.id}/400/300`}
        width={"100%"}
        height={250}
        loading="lazy"
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>
        {product.price} ₾ — {product.category}
      </p>
      <button onClick={() => onAdd(product)}>კალათაში</button>
    </div>
  );
});

export default function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);

  // მძიმე „ფილტრი" — ხელოვნურად შენელებული
  const filtered = useMemo(() => {
    return products.filter((p) => {
      let x = 0;
      for (let i = 0; i < 5000; i++) x += i; // ხელოვნური დატვირთვა
      return p.name.includes(search);
    });
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const handleAdd = useCallback((pr) => {
    setCart((prev) => [...prev, pr]);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);
  return (
    <div>
      <img
        src="/hero.webp"
        width={1600}
        height={900}
        fetchpriority="high"
        alt="Slow Shop hero"
        style={{ width: "100%", height: "auto" }}
      />
      <h1>Slow Shop — მოძებნეთ სასურველი პროდუქტი</h1>
      <label htmlFor="search">ძებნა</label>
      <input
        id="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="ძებნა..."
        aria-label="პროდუქტის ძებნა"
      />
      <p>კალათაში: {cart.length}</p>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            gap: 8,
            justifyContent: "space-between",
          }}
        >
          {pageItems.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            padding: 16,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            წინა
          </button>

          <span>
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            შემდეგი
          </button>
        </div>
      </div>
    </div>
  );
}
