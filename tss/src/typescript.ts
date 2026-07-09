// დავალება 1 — თანამშრომლის მონაცემები (Type Alias)

type Status = "Active" | "Inactive";

type EmployeeID = string | number;

type Employee = {
  id: EmployeeID;
  name: string;
  status: Status;
};

const employee: Employee = {
  id: 1,
  name: "Giorgi",
  status: "Active",
};

console.log(employee);

// დავალება 2 — მომხმარებლის პროფილი

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  id: 1,
  name: "Giorgi",
  role: "Developer",
};

// დავალება 3 — პროდუქტის კატალოგი

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const products: Product[] = [
  {
    id: 0,
    name: "samsung",
    price: 1500,
    description: "best phone",
  },
  {
    id: 1,
    name: "samsung",
    price: 20,
  },
];

// დავალება 4 — Omit Utility Type

interface User1 {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User1, "password">;

const user: PublicUser = {
  id: 1,
  name: "Giorgi",
  email: "giorgi@gmail.com",
};

// დავალება 5 — ონლაინ მაღაზიის მონაცემები

type Currency = "USD" | "EUR" | "GEL";

interface Product1 {
  id: number;
  name: string;
  price: number;
  currency: Currency;
}

const prod: Product1[] = [
  {
    id: 0,
    name: "iPhone 15",
    price: 2500,
    currency: "USD",
  },
  {
    id: 1,
    name: "MacBook Pro",
    price: 5000,
    currency: "EUR",
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 2200,
    currency: "USD",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 600,
    currency: "EUR",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 300,
    currency: "GEL",
  },
];

// დავალება 6 — შეკვეთის სისტემა

interface Customer {
  id: number;
  name: string;
}
interface Order {
  id: number;
  customer: Customer;
  total: number;
}

const customer: Order[] = [
  {
    id: 0,
    customer: {
      id: 0,
      name: "Giorgi",
    },
    total: 100,
  },
  {
    id: 1,
    customer: {
      id: 1,
      name: "Jhora",
    },
    total: 300,
  },
];
