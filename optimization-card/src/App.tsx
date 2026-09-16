import { Card } from "./components/Card";
import { cardContent } from "./data/Content";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      {cardContent.map((item) => (
        <Card
          key={item.id}
          src={item.src}
          name={item.name}
          description={item.description}
          price={item.price}
          time={item.time}
          user={item.user}
          userName={item.userName}
        />
      ))}
    </main>
  );
}

export default App;
