export const products = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `პროდუქტი ${i + 1}`,
  price: Math.round(Math.random() * 500) + 1,
  category: ["ტექნიკა", "ტანსაცმელი", "წიგნები", "საკვები"][i % 4],
}));
