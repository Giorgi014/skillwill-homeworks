import { useState } from "react";

export default function OrderForm({ productName, price }) {
  const [qty, setQty] = useState(2);
  const [result, setResult] = useState("");

  function handleOrder() {
    const total = (qty * price).toFixed(2);
    const unitPrice = price.toFixed(2);
    setResult(
      `შეკვეთა მიღებულია: ${qty} × ${productName} (${unitPrice} ₾), ჯამი ${total} ₾`,
    );
  }

  return (
    <section id="offer" className="offer">
      <h2>შეუკვეთეთ ხვალ დილისთვის</h2>
      <label htmlFor="qty">რამდენი შოთი გჭირდებათ?</label>
      <div className="offer-row">
        <input
          id="qty"
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />
        <button type="button" onClick={handleOrder}>
          შეკვეთის დაფიქსირება
        </button>
      </div>
      <p aria-live="polite">{result}</p>
    </section>
  );
}
