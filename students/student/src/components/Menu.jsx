export default function Menu({ items }) {
  return (
    <section id="menu" className="menu">
      <h2>დღის მენიუ</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.price.toFixed(2)} ₾</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
