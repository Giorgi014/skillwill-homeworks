import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "ყურსასმენი",
    category: "ტექნიკა",
    price: 120,
    inStock: true,
  },
  {
    id: 2,
    name: "კლავიატურა",
    category: "ტექნიკა",
    price: 85,
    inStock: false,
  },
  {
    id: 3,
    name: "რომანი",
    category: "წიგნები",
    price: 25,
    inStock: true,
  },
  {
    id: 4,
    name: "ჰუდი",
    category: "სამოსი",
    price: 60,
    inStock: true,
  },
  {
    id: 5,
    name: "ლექსების კრებული",
    category: "წიგნები",
    price: 18,
    inStock: false,
  },
];

const ProductFilter = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ყველა");
  const [sort, setSort] = useState("asc");
  const [onlyInStock, setOnlyInStock] = useState(false);

  const visible = [...PRODUCTS]
    .filter((product) => {
      if (category === "ყველა") {
        return true;
      }

      return product.category === category;
    })
    .filter((product) => {
      if (!onlyInStock) {
        return true;
      }

      return product.inStock;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      }

      return b.price - a.price;
    });

  const clearFilters = () => {
    setQuery("");
    setCategory("ყველა");
    setSort("asc");
    setOnlyInStock(false);
  };

  return (
    <div className="product-filter">
      <h2>პროდუქტების ფილტრი</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="მოძებნე პროდუქტი..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="ყველა">ყველა</option>
          <option value="ტექნიკა">ტექნიკა</option>
          <option value="წიგნები">წიგნები</option>
          <option value="სამოსი">სამოსი</option>
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="asc">ფასი: ზრდადობით</option>
          <option value="desc">ფასი: კლებადობით</option>
        </select>
        <label className="stock-filter">
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(event) => setOnlyInStock(event.target.checked)}
          />
          მხოლოდ მარაგში არსებული
        </label>
        <button type="button" onClick={clearFilters}>
          ფილტრების გასუფთავება
        </button>
      </div>
      <p className="result-count">ნაპოვნია: {visible.length}</p>
      {visible.length === 0 ? (
        <p>ვერაფერი მოიძებნა</p>
      ) : (
        <ul className="products">
          {visible.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> <span>{product.price}₾</span>
              <small className={product.inStock ? "in-stock" : "out-stock"}>
                {product.inStock ? "მარაგშია" : "არ არის მარაგში"}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductFilter;
