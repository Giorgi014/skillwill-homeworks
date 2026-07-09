// დავალება 1 — Student Type

type Student = {
  id: number;
  name: string;
  age: number;
};

const students: Student[] = [
  {
    id: 0,
    name: "Giorgi",
    age: 26,
  },
  {
    id: 1,
    name: "Jhora",
    age: 40,
  },
  {
    id: 2,
    name: "Enver",
    age: 18,
  },
];

const studentsName = students.map((student) => student.name);
console.log(studentsName);

// დავალება 2 — Product Interface

interface Product {
  id: number;
  title: string;
  price: number;
}

const products: Product[] = [
  {
    id: 0,
    title: "Car",
    price: 7500,
  },
  {
    id: 1,
    title: "Bike",
    price: 5000,
  },
  {
    id: 2,
    title: "Ball",
    price: 250,
  },
  {
    id: 3,
    title: "Ship",
    price: 1000000,
  },
  {
    id: 4,
    title: "Airplane",
    price: 250000,
  },
];

const maxPrice = Math.max(...products.map((product) => product.price));

const mostExpensiveProduct = products.find(
  (product) => product.price === maxPrice,
);

console.log(mostExpensiveProduct);

// დავალება 3 — Extends-ის გამოყენება

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
  salary: number;
}

const employee: Employee[] = [
  {
    name: "Giorgi",
    age: 26,
    position: "director",
    salary: 15000,
  },
  {
    name: "Jhora",
    age: 40,
    position: "consultant",
    salary: 500,
  },
  {
    name: "Enver",
    age: 18,
    position: "driver",
    salary: 1500,
  },
];

const positions = employee.map((p) => p.position);

console.log(positions);

// დავალება 4 — Omit-ის გამოყენება

interface User {
  id: number;
  username: string;
  password: string;
}

type PublicUser = Omit<User, "password">;

const users: PublicUser[] = [
  {
    id: 0,
    username: "Giorgi",
  },
  {
    id: 1,
    username: "Jhora",
  },
  {
    id: 2,
    username: "Enver",
  },
];

console.log(users);

// დავალება 5 — მონაცემების ფილტრაცია

type Book = {
  title: string;
  author: string;
  pages: number;
};

const books: Book[] = [
  {
    title: "The Art of War",
    author: "Sun Tzu",
    pages: 273,
  },
  {
    title: "The Prince",
    author: "Niccolò Machiavelli",
    pages: 304,
  },
  {
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    pages: 1249,
  },
  {
    title: "The Republic",
    author: "Plato",
    pages: 280,
  },
  {
    title: "Politics",
    author: "Aristotle",
    pages: 272,
  },
  {
    title: "The Book of Five Rings",
    author: "Miyamoto Musashi",
    pages: 192,
  },
];

const bigBooks = books.filter((b) => {
  if (b.pages > 300) {
    return b;
  }
});

console.log(bigBooks);

// დავალება 6 — Type + Interface ერთად

type Role = "admin" | "user" | "guest";

interface Account {
  id: number;
  name: string;
  role: Role;
}

const accounts: Account[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "admin",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "user",
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "guest",
  },
  {
    id: 4,
    name: "Diana Wilson",
    role: "user",
  },
  {
    id: 5,
    name: "Ethan Davis",
    role: "admin",
  },
  {
    id: 6,
    name: "Fiona Miller",
    role: "guest",
  },
  {
    id: 7,
    name: "George Anderson",
    role: "user",
  },
  {
    id: 8,
    name: "Hannah Taylor",
    role: "guest",
  },
  {
    id: 9,
    name: "Ian Thomas",
    role: "admin",
  },
  {
    id: 10,
    name: "Julia Martinez",
    role: "user",
  },
];

const findAdmin = accounts.filter((i) => i.role === "admin");

console.log(findAdmin.length);
