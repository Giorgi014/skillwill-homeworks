"use strict";
// type MonthName =
//   | "იანვარი"
//   | "თებერვალი"
//   | "მარტი"
//   | "აპრილი"
//   | "მაისი"
//   | "ივნისი"
//   | "ივლისი"
//   | "აგვისტო"
//   | "სექტემბერი"
//   | "ოქტომბერი"
//   | "ნოემბერი"
//   | "დეკემბერი";
// type WeekDays = "კვი" | "ორშ" | "სამ" | "ოთხ" | "ხუთ" | "პარ" | "შაბ";
// const calendar = document.getElementById("calendar") as HTMLDivElement;
// const yearTitle = document.getElementById("yearTitle") as HTMLHeadingElement;
// const now: Date = new Date();
// const year: number = now.getFullYear();
// //   yearTitle.innerText = year.toString();
// yearTitle.innerText = `${year} წლის კალენდარი`;
// const monthNames: MonthName[] = [
//   "იანვარი",
//   "თებერვალი",
//   "მარტი",
//   "აპრილი",
//   "მაისი",
//   "ივნისი",
//   "ივლისი",
//   "აგვისტო",
//   "სექტემბერი",
//   "ოქტომბერი",
//   "ნოემბერი",
//   "დეკემბერი",
// ];
// const weekDays: WeekDays[] = ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"];
// const displayWeekDays = [...weekDays.slice(1), weekDays[0]];
// function createMonth(monthIndex: number): HTMLDivElement {
//   const monthDiv = document.createElement("div") as HTMLDivElement;
//   monthDiv.classList = "month";
//   const title = document.createElement("div") as HTMLDivElement;
//   title.classList = "month-title";
//   title.innerText = monthNames[monthIndex];
//   monthDiv.appendChild(title);
//   const weekDiv = document.createElement("div") as HTMLDivElement;
//   weekDiv.classList = "weekdays";
//   displayWeekDays.forEach((d: WeekDays): void => {
//     const el = document.createElement("div") as HTMLDivElement;
//     el.innerText = d;
//     weekDiv.appendChild(el);
//   });
//   monthDiv.appendChild(weekDiv);
//   const daysDiv = document.createElement("div");
//   daysDiv.classList = "days";
//   const firstDay: number = new Date(year, monthIndex, 1).getDay();
//   const daysInMonth: number = new Date(year, monthIndex + 1, 0).getDate();
//   for (let i = 0; i < firstDay; i++) {
//     const empty = document.createElement("div");
//     empty.className = "day empty";
//     daysDiv.appendChild(empty);
//   }
//   for (let day = 1; day <= daysInMonth; day++) {
//     let nowday = new Date(year, monthIndex, day).getDay();
//     const dayEl = document.createElement("div");
//     dayEl.className = "day";
//     dayEl.innerText = day.toString();
//     if (day === now.getDate() && monthIndex === now.getMonth()) {
//       dayEl.classList.add("today");
//     }
//     if (nowday === 5 || nowday === 6) {
//       dayEl.classList.add("dasv");
//     }
//     daysDiv.appendChild(dayEl);
//   }
//   monthDiv.appendChild(daysDiv);
//   return monthDiv;
// }
// for (let i = 0; i < 12; i++) {
//   calendar.appendChild(createMonth(i));
// }
////////////////////////////////////
// 1
////////////////////////////////////
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   category: string;
// };
// type CartItem = {
//   product: Product;
//   quantity: number;
// };
// type User = {
//   id: number;
//   name: string;
//   cart: CartItem[];
// };
// ////////////////////////////////////
// // 2
// ////////////////////////////////////
// let products: Product[] = [];
// let users: User[] = [];
// ////////////////////////////////////
// // 3
// ////////////////////////////////////
// function addProduct(
//   id: number,
//   name: string,
//   price: number,
//   stock: number,
//   category: string,
// ): void {
//   const product: Product = {
//     id,
//     name,
//     price,
//     stock,
//     category,
//   };
//   products.push(product);
// }
// function printProducts(): void {
//   console.log("\nProducts:\n ");
//   products.forEach((p) => {
//     console.log(`
//         id: ${p.id},\n
//         name: ${p.name},\n
//         price: ${p.price},\n
//         stock: ${p.stock},\n
//         category: ${p.category}
//         `);
//   });
// }
// function findProductById(id: number): Product | undefined {
//   return products.find((p) => p.id === id);
// }
// function addUser(id: number, name: string): void {
//   const user: User = {
//     id: id,
//     name: name,
//     cart: [],
//   };
//   users.push(user);
// }
// function printUser(p): void {
//   console.log("\nUsers:\n");
//   console.log(`
//         id: ${p.id},\n
//         name: ${p.name},
//         `);
// }
// function findUseById(id: number): User | undefined {
//   return users.find((u) => u.id === id);
// }
// function findUseByName(name: string): User[] | undefined {
//   const myUsers = users.filter((u) => u.name === name);
//   if (myUsers.length === 0) {
//     return;
//   }
//   return myUsers;
// }
// function addToCard(userId: number, productId: number, quantity: number): void {
//   const user = findUseById(userId);
//   const product = findProductById(productId);
//   if (!user) {
//     console.log("user not found");
//     return;
//   }
//   if (!product) {
//     console.log("product not found");
//     return;
//   }
//   if (product.stock < quantity) {
//     console.log("Not enought stock");
//     return;
//   }
//   const existingItem = user.cart.find((item) => item.product.id === productId);
//   if (existingItem) {
//     existingItem.quantity += quantity;
//   } else {
//     user.cart.push({ product, quantity });
//   }
//   product.stock -= quantity;
//   console.log(`Added: ${quantity} ${product.name} to ${user.name}`);
// }
// addProduct(1, "Ribeye Steak", 15.99, 50, "beef");
// addProduct(2, "Ground Beef", 8.99, 120, "beef");
// addProduct(3, "Beef Brisket", 12.49, 40, "beef");
// addProduct(4, "Chicken Breast", 7.99, 200, "chicken");
// addProduct(5, "Chicken Wings", 6.49, 150, "chicken");
// addProduct(6, "Chicken Thighs", 5.99, 180, "chicken");
// addProduct(7, "Pork Ribs", 11.99, 60, "pork");
// addProduct(8, "Pork Belly", 9.49, 75, "pork");
// addProduct(9, "Bacon", 6.99, 300, "pork");
// addProduct(10, "Salmon Fillet", 18.99, 80, "seafood");
// addProduct(11, "Shrimp", 14.99, 100, "seafood");
// addProduct(12, "Tuna Steak", 16.49, 55, "seafood");
// addProduct(13, "Whole Milk", 3.49, 500, "dairy");
// addProduct(14, "Cheddar Cheese", 5.99, 250, "dairy");
// addProduct(15, "Greek Yogurt", 4.29, 180, "dairy");
// addProduct(16, "Sourdough Bread", 4.99, 90, "bakery");
// addProduct(17, "Bagels", 3.99, 120, "bakery");
// addProduct(18, "Croissant", 2.49, 200, "bakery");
// addProduct(19, "Broccoli", 2.29, 300, "vegetables");
// addProduct(20, "Carrots", 1.79, 400, "vegetables");
// printProducts();
// console.log(findProductById(3));
////////////////////////////////////
// 1
////////////////////////////////////
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   category: string;
// };
// type CartItem = {
//   product: Product;
//   quantity: number;
// };
// type User = {
//   id: number;
//   name: string;
//   cart: CartItem[];
// };
// ////////////////////////////////////
// // 2
// ////////////////////////////////////
// let products: Product[] = [];
// let users: User[] = [];
// ////////////////////////////////////
// // 3
// ////////////////////////////////////
// function addProduct(
//   id: number,
//   name: string,
//   price: number,
//   stock: number,
//   category: string,
// ): void {
//   const product: Product = {
//     id,
//     name,
//     price,
//     stock,
//     category,
//   };
//   products.push(product);
// }
// function printProducts(): void {
//   console.log("\nProducts:\n ");
//   products.forEach((p) => {
//     console.log(`
//         id: ${p.id},\n
//         name: ${p.name},\n
//         price: ${p.price},\n
//         stock: ${p.stock},\n
//         category: ${p.category}
//         `);
//   });
// }
// function findProductById(id: number): Product | undefined {
//   return products.find((p) => p.id === id);
// }
// function findProductByName(name: string): Product | undefined {
//   return products.find((p) => p.name === name);
// }
// function findProductByCategory(category: string): Product[] | undefined {
//   const myProducts = products.filter((p) => p.category === category);
//   if (myProducts.length === 0) {
//     return;
//   }
//   return myProducts;
// }
// ////////////////////////////////////
// // 4
// ////////////////////////////////////
// function addUser(id: number, name: string): void {
//   const user: User = {
//     id,
//     name,
//     cart: [],
//   };
//   users.push(user);
// }
// function printUsers(): void {
//   console.log("\nUsers:\n ");
//   users.forEach((p) => {
//     console.log(`
//         id: ${p.id},\n
//         name: ${p.name}
//     `);
//   });
// }
// function findUserById(id: number): User | undefined {
//   return users.find((u) => u.id === id);
// }
// function findUserByName(name: string): User[] | undefined {
//   const myUsers = users.filter((u) => u.name === name);
//   if (myUsers.length === 0) {
//     return;
//   }
//   return myUsers;
// }
// ////////////////////////////////////
// // 5
// ////////////////////////////////////
// function addToCart(userId: number, productId: number, quantity: number): void {
//   const user = findUserById(userId);
//   const product = findProductById(productId);
//   if (!user) {
//     console.log("User Not Found");
//     return;
//   }
//   if (!product) {
//     console.log("Product Not Found");
//     return;
//   }
//   if (product.stock < quantity) {
//     console.log("Not enough Stock");
//     return;
//   }
//   const existingItem = user.cart.find((item) => item.product.id === productId);
//   if (existingItem) {
//     existingItem.quantity += quantity;
//   } else {
//     user.cart.push({
//       product,
//       quantity,
//     });
//   }
//   product.stock -= quantity;
//   console.log(`\n\nAdded: ${quantity} ${product.name} to ${user.name}\n\n`);
// }
// function removeFromCart(userId: number, productId: number): void {
//   const user = findUserById(userId);
//   const product = findProductById(productId);
//   if (!user) {
//     console.log("User Not Found");
//     return;
//   }
//   if (!product) {
//     console.log("Product Not Found");
//     return;
//   }
//   const item = user.cart.find((i) => i.product.id === productId);
//   if (!item) {
//     console.log(`Item Not Found in Cart`);
//     return;
//   }
//   item.product.stock += item.quantity;
//   user.cart = user.cart.filter((i) => i.product.id !== productId);
//   console.log("Product Removed From Cart!");
// }
// ////////////////////////////////////
// // 6
// ////////////////////////////////////
// export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
//   let compYears: number = sonYearsOld * 2;
//   if (dadYearsOld > compYears) {
//     return dadYearsOld - sonYearsOld;
//   } else if (dadYearsOld === compYears) {
//     return 0;
//   } else if (dadYearsOld < compYears) {
//     return sonYearsOld - dadYearsOld;
//   } else {
//     return 0;
//   }
// }
// export function narcissistic(value: number): boolean {
//   const digits = value.toString().split("");
//   const power = digits.length;
//   const sum = digits.reduce((acc, digit) => {
//     return acc + Math.pow(Number(digit), power);
//   }, 0);
//   return sum === value;
// }
// function scramble(str1: string, str2: string): boolean {
//   const strings: Record<string, number> = {};
//   for (const text1 of str1) {
//     strings[text1] = (strings[text1] || 0) + 1;
//   }
//   for (const text2 of str2) {
//     if (!strings[text2]) {
//       return false;
//     }
//     strings[text2]--;
//   }
//   return true;
// }
// console.log(scramble("asfshesaskaslllasao", "hello"));
// console.log(scramble("asfshesaskaslasao", "hello"));
// console.log(scramble("asddasdasdasda", "hello"));
// function bmi(weight: number, height: number): string {
//   const bmi: number = Number(weight / (height * height));
//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else if (bmi > 30) {
//     return "Obese";
//   }
//  throw new Error("The method or operation is not implemented.");
// }
// console.log(bmi(80, 2.2));
// function isTriangle(a: number, b: number, c: number): boolean {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   }
//   return false;
// }
// console.log(isTriangle(1, 2, 3));
// console.log(isTriangle(2, 2, 3));
// function countSmileys(arr: string[]): number {
//   let count = 0;
//   for (const smile of arr) {
//     if (
//       smile === ":)" ||
//       smile === ":-)" ||
//       smile === ":~)" ||
//       smile === ":D" ||
//       smile === ":-D" ||
//       smile === ":~D" ||
//       smile === ";)" ||
//       smile === ";-)" ||
//       smile === ";~)" ||
//       smile === ";D" ||
//       smile === ";-D" ||
//       smile === ";~D"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
// function filter_list(l: Array<any>): Array<number> {
//   return l.filter((a) => Number.isInteger(a));
// }
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
// function divisors(n: number) {
//   let arr: number[] = [1, n];
//   if (n === 1) return 1;
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr.length;
// }
// console.log(divisors(10));
// console.log(divisors(11));
// console.log(divisors(64));
// console.log(divisors(500000));
// function expressionsMatter(a: number, b: number, c: number): number {
//   //   let maxNum = Math.max(
//   //     a + b + c,
//   //     a * b * c,
//   //     a + b * c,
//   //     (a + b) * c,
//   //     a * (b + c),
//   //   );
//   //   return maxNum;
// //   return [a + b + c, a * b * c, a + b * c, (a + b) * c, a * (b + c)].sort(
// //     (a, b) => b - a,
// //   )[0];
// }
// console.log(expressionsMatter(2, 1, 2));
// function getVolumeOfCuboid(
//   length: number,
//   width: number,
//   height: number,
// ): number {
//   const volume = length * width * height;
//   return volume;
// }
// console.log(getVolumeOfCuboid(1, 2, 2));
//# sourceMappingURL=typescript.js.map