import { FoodsItems } from "./data/foodItems";

export const Card = () => {
  return (
    <>
      {FoodsItems.map((item) => (
        <div className="card_cont">
          <img src={item.src} alt={item.name} />
          <section className="card_info">
            <div>
              <h2>{item.name}</h2>
            </div>
            <p className="description">{item.description}</p>
            <div className="nutrition">
              <p className="calories">{item.nutrition.calories} Cal</p>
              <p className="p_f_c">
                P/F/C:{" "}
                {`${item.nutrition.protein}/${item.nutrition.fat}/${item.nutrition.carbs}`}
              </p>
              <p>{item.nutrition.temperature} °C</p>
            </div>
            <div className="order">
              <div className="prices">
                <p className="current_price">{`${item.price.currency} ${item.price.current}`}</p>
                <del className="current_price">{`${item.price.currency} ${item.price.original}`}</del>
              </div>
              <button className="order_btn">ORDER</button>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};
