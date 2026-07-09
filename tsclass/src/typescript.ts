// შექმენი:
// class Employee
// და
// class Manager extends Employee
// ორივე კლასს ჰქონდეს:
// showInfo()
// Manager-ში მეთოდი განსხვავებულად იმუშავოს.
// შეფასდება
// •	Method Override
// •	Polymorphism

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  set Name(name: string) {
    this.name = name;
  }

  set Age(age: number) {
    this.age = age;
  }

  set Position(position: string) {
    this.position = position;
  }

  get Name() {
    return this.name;
  }

  get Age() {
    return this.age;
  }

  get Position() {
    return this.position;
  }

  showInfo(): void {
    console.log(
      `Emplyee: Name-${this.Name} Age-${this.Age} Position-${this.Position}`,
    );
  }
}

class Manager extends Employee {
  status: string;

  constructor(name: string, age: number, position: string, status: string) {
    super(name, age, position);
    this.status = status;
  }

  set Status(status: string) {
    this.status = status;
  }

  get Status() {
    return this.status;
  }

  showInfo(): void {
    console.log(
      `Manager: Name-${this.Name} Age-${this.Age} Position-${this.Position} Status-${this.Status}`,
    );
  }
}

const employee = new Employee("enver", 18, "junior");
const manager = new Manager("giorgi", 26, "senior", "developer");

console.log(employee);
console.log(manager);
