"use strict";
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
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    set Name(name) {
        this.name = name;
    }
    set Age(age) {
        this.age = age;
    }
    set Position(position) {
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
    showInfo() {
        console.log(`Emplyee: Name-${this.Name} Age-${this.Age} Position-${this.Position}`);
    }
}
class Manager extends Employee {
    constructor(name, age, position, status) {
        super(name, age, position);
        this.status = status;
    }
    set Status(status) {
        this.status = status;
    }
    get Status() {
        return this.status;
    }
    showInfo() {
        console.log(`Manager: Name-${this.Name} Age-${this.Age} Position-${this.Position} Status-${this.Status}`);
    }
}
const employee = new Employee("enver", 18, "junior");
const manager = new Manager("giorgi", 26, "senior", "developer");
console.log(employee);
console.log(manager);
//# sourceMappingURL=typescript.js.map