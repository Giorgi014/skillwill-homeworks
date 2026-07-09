//ship მოდელი: 4 ერთუჯრიანი, 3 ორუჯრიანი, 2 სამუჯრიანი და 1 ოთხუჯრიანი
//Board მოდელი: 10x10
//Game მოდელი:
//გემების განთავსება: შემთხვევითობით
//შეტევა
//Hit/miss
//ship sunk
//გამარჯვებული
//მოწინააღმდეგე - Enemy AI
//turn
//ლოგიკა

/////////////////////////////////////////////
// ship
/////////////////////////////////////////////
type Ship = {
  id: number;
  size: number;
  hits: number;
};

const createShip = (id: number, size: number): Ship => ({
  id,
  size,
  hits: 0,
});

const isShipSunk = (ship: Ship): boolean => {
  return ship.hits >= ship.size;
};

type Cell = {
  shipId: number | null;
  hit: boolean;
};

type Board = {
  grid: Cell[][];
  ships: Ship[];
};

const BOARD_SIZE = 10;
