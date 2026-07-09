// დავალება 1
const divideNumbers = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("0-ზე გაყოფა შეუძლებელია");
    }
    let divide = a / b;
    console.log(divide);
  } catch (error) {
    console.log(error.message);
  }
};

divideNumbers(10, 2);
divideNumbers(10, 0);

// დავალება 2

const useAddress = () => {
  const user = {
    name: "Giorgi",
  };

  try {
    console.log(user.address.city);
  } catch (error) {
    console.log(error.message);
  }
};

useAddress();

// დავალება 3

const chackAge = (age) => {
  try {
    if (age >= 18) {
      console.log("Access granted");
    } else {
      throw new Error("Access denied");
    }
  } catch (error) {
    console.log(error.message);
  }
};

chackAge(19);
chackAge(17);

// დავალება 4

const users = [{ name: "Giorgi" }, { name: "Nika" }];

const findUser = (index) => {
  try {
    if (!users[index]) {
      throw new Error("User not found");
    } else {
      console.log(users[index]);
    }
  } catch (error) {
    console.log(error.message);
  }
};

findUser(0);
findUser(2);

// დავალება 5

const parseJSON = (jsonString) => {
  try {
    console.log(JSON.parse(jsonString));
  } catch (error) {
    console.log(error.message);
  }
};

parseJSON('{"name":"Giorgi"}');
parseJSON("{name:Giorgi}");

// დავალება 6

const correctEmail = "admin@gmail.com";
const correctPassword = "123456";

const login = (email, password) => {
  try {
    if (email !== correctEmail || password !== correctPassword) {
      throw new Error("Invalid credentials");
    } else {
      console.log("Login successful");
    }
  } catch (error) {
    console.log(error.message);
  }
};

login(correctEmail, correctPassword);
login("admin@gmail.com", "123456");
login("admin@gmail.co", "123456");
login("admin@gmail.com", "12345");

// ========== ARRAYS ==========

const evenNumber = () => {
  const numbers = [5, 10, 15, 20, 25];

  const findeEven = numbers.filter((even) => even % 2 === 0);

  console.log(findeEven.length);
};

evenNumber();

const adult = () => {
  const users = [
    { name: "Giorgi", age: 22 },
    { name: "Nika", age: 17 },
    { name: "Jora", age: 15 },
    { name: "Luka", age: 25 },
    { name: "Jumber", age: 30 },
  ];

  const findAdult = users.filter((a) => a.age >= 18);

  console.log(findAdult);
};

adult();

const totalNumber = () => {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 700 },
    { name: "Mouse", price: 50 },
  ];

  const totalPrice = products.map((i) => i.price).reduce((p, i) => p + i);

  console.log(totalPrice);
};

totalNumber();

// ========== Objects ==========
