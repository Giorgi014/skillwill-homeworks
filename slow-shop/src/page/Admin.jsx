import { products } from "../data";

export default function Admin() {
  return (
    <div style={{ padding: 16 }}>
      <h1>ადმინი — ყველა პროდუქტი</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: 4 }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: 4 }}>სახელი</th>
            <th style={{ border: "1px solid #ccc", padding: 4 }}>ფასი</th>
            <th style={{ border: "1px solid #ccc", padding: 4 }}>კატეგორია</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={{ border: "1px solid #ccc", padding: 4 }}>{p.id}</td>
              <td style={{ border: "1px solid #ccc", padding: 4 }}>{p.name}</td>
              <td style={{ border: "1px solid #ccc", padding: 4 }}>
                {p.price} ₾
              </td>
              <td style={{ border: "1px solid #ccc", padding: 4 }}>
                {p.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
