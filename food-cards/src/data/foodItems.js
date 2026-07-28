import Pizza from "./../assets/img/pizza.jpg";
import Tortellini from "./../assets/img/tortellini.jpg";
import Cake from "./../assets/img/cake.jpg";

export const FoodsItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    src: Pizza,
    description:
      "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.",
    tags: ["spicy", "popular"],
    nutrition: {
      calories: 265,
      protein: 12,
      fat: 10,
      carbs: 31,
      temperature: 53.8,
    },
    price: {
      current: 23.9,
      original: 29.9,
      currency: "USD",
    },
  },
  {
    id: 2,
    name: "Tortellini",
    src: Tortellini,
    description:
      "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.",
    tags: ["vegetarian-option", "spicy", "popular"],
    nutrition: {
      calories: 270,
      protein: 18,
      fat: 4,
      carbs: 41,
      temperature: 42.4,
    },
    price: {
      current: 17.9,
      original: 22.9,
      currency: "USD",
    },
  },
  {
    id: 3,
    name: "Strawberry Cake",
    src: Cake,
    description:
      "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.",
    tags: ["popular"],
    nutrition: {
      calories: 346,
      protein: 6,
      fat: 14,
      carbs: 49,
      temperature: 13.9,
    },
    price: {
      current: 13.9,
      original: 18.9,
      currency: "USD",
    },
  },
];
