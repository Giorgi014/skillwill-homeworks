import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import OrderForm from "./components/OrderForm.jsx";

const MENU = [
  { id: "shoti", name: "შოთის პური", price: 1.2 },
  { id: "khachapuri", name: "იმერული ხაჭაპური", price: 7.5 },
  { id: "nazuki", name: "ნაზუქი", price: 3.0 },
];

export default function App() {
  const shoti = MENU[0];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu items={MENU} />
        <OrderForm productName={shoti.name} price={shoti.price} />
      </main>
    </>
  );
}
