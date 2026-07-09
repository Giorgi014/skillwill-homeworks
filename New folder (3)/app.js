// const checkName = (name, lastName) => {
//   typeof name !== "string" || typeof lastName !== "string"
//     ? console.log("Only text can you write not numbers bro")
//     : console.log(name.toUpperCase(), lastName.toUpperCase());
// };

// checkName("Giorgi", "Gugunava");

// let setAge = prompt("write your age");

// const checkAge = (age) => {
//   if (age >= 18) {
//     return "W bro you become adult";
//   } else {
//     return "No place here for childs ";
//   }
// };

// console.log(checkAge(setAge));

// const getAge = (year) => {
//   let currentYear = new Date();
//   let age = currentYear.getFullYear() - year;

//   if (age < 0) {
//     return "imposibe to be minus years old";
//   } else {
//     return age;
//   }
// };

// console.log(getAge(1999));

// const number = (90) 27, 30, 13, 15, 49, 10];

// console.log(Math.max(...number));

// const checkParam = (num) => {
//   return typeof num === "number"
//     ? num * 10
//     : typeof num === "string"
//       ? num.toUpperCase()
//       : typeof num === "boolean"
//         ? !num
//         : "not good bro";
// };

// console.log(checkParam());

// let store = 2;

// const buyItem = (item = 0) => {
//   if (typeof item !== "number") {
//     return "pls write only number brosk";
//   }

//   if (!item) {
//     return `${store} ნივთია მაგარში ბრატ.`;
//   }

//   if (store >= item) {
//     store -= item;
//     return `წარმატებით შეიძინე ${item} ნივთი. დარჩა ${store}`;
//   } else {
//     return "სამწუხაროდ მარაგი აგოგვეწურა ჯიგარო";
//   }
// };

// // console.log(buyItem());
// console.log(buyItem(1));
// console.log(buyItem(1));
// console.log(buyItem(1));

// const sum = (num1, num2) => {
//   if (typeof num1 && typeof num2 !== "number") {
//     return "write only number";
//   }
//   return num1 + num2;
// };

// console.log(sum(8, 6));

// const subtract = (num1, num2) => {
//   if (typeof num1 && typeof num2 !== "number") {
//     return "write only number";
//   }
//   return num1 - num2;
// };

// console.log(subtract(8, 6));

// const multiply = (num1, num2) => {
//   if (typeof num1 && typeof num2 !== "number") {
//     return "write only number";
//   }
//   return num1 * num2;
// };

// console.log(multiply(8, 6));

// const divide = (num1, num2) => {
//   if (typeof num1 && typeof num2 !== "number") {
//     return "write only number";
//   }
//   return num1 / num2;
// };

// console.log(divide(8, 6));

// const precent = (num1, num2) => {
//   if (typeof num1 && typeof num2 !== "number") {
//     return "write only number";
//   }
//   return (num1 * num2) / 100;
// };

// console.log(precent(8, 6));

// const power = (num1, num2) => {
//   if (typeof num1 && typeof num2 !== "number") {
//     return "write only number";
//   }
//   return num1 ** num2;
// };

// console.log(power(8, 6));

// const squerRoot = (num1) => {
//   if (typeof num1 !== "number") {
//     return "write only number";
//   }
//   return Math.sqrt(num1);
// };

// console.log(squerRoot(8));

// const cubeRoot = (num1) => {
//   if (typeof num1 !== "number") {
//     return "write only number";
//   }
//   return Math.cbrt(num1);
// };

// console.log(cubeRoot(8));

// const module = () => {
//   let sum = 5 + 2;
//   let module = sum % 2;

//   return module;
// };

// console.log(module());

// let even = [];
// let odd = [];

// const findNum = () => {
//   let num = 100;

//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       even.push(i);
//     } else {
//       odd.push(i);
//     }
//   }

//   return { even, odd };
// };

// console.log(findNum());

// const number = [4, 6, 199, 0, 43, 3, 34, 67, 223];

// const printEvenAndOdd = (x) => {
//   let even = [];
//   let odd = [];

//   for (let i = 0; i < x.length; i++) {
//     if (typeof x[i] === "number" && x[i] > 0) {
//       if (x[i] % 2 === 0) {
//         even.push(x[i]);
//       } else {
//         odd.push(x[i]);
//       }
//     }
//   }
//   console.log(even + " არის ლუწი");
//   console.log(odd + " არის კენტი");
// };

// printEvenAndOdd(number);

// const reverseWord = (word) => {
//   let reversedWord = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
//   }

//   return reversedWord;
// };

// console.log(reverseWord("dato giorgi i'd"));

// let numbers = [2, 72, 75, 743, 1, 14, 67, 245];

// const sortingMax = () => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let n = 0; n < numbers.length; n++) {
//       if (numbers[i] < numbers[n]) {
//         let num = numbers[i];
//         numbers[i] = numbers[n];
//         numbers[n] = num;
//       }
//     }
//   }

//   return numbers;
// };

// console.log(sortingMax());

// const sortMax = () => {
//   numbers.sort((min, max) => min - max);

//   return numbers;
// };

// console.log(sortMax());

// const sortingMin = () => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let n = 0; n < numbers.length; n++) {
//       if (numbers[i] > numbers[n]) {
//         let num = numbers[i];
//         numbers[i] = numbers[n];
//         numbers[n] = num;
//       }
//     }
//   }

//   return numbers;
// };

// console.log(sortingMin());

// const sortMin = () => {
//   numbers.sort((min, max) => max - min);

//   return numbers;
// };

// console.log(sortMin());

// const findMax = () => {
//   return Math.max(...numbers);
// };

// console.log(findMax());

// const findMaxNum = () => {
//   let max = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// };

// console.log(findMaxNum());

// const findAverage = () => {
//   let calculate = numbers.reduce((a, b) => a + b);
//   let average = calculate / numbers.length;

//   return average;
// };

// console.log(findAverage());

// const findAverageNum = () => {
//   let num = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     num += numbers[i];
//   }

//   return num / numbers.length;
// };

// console.log(findAverageNum());

// const numbers = [-2, 5, 0, 8, -1, 3];

// const findPositiveNumber = () => {
//   const positive = numbers.filter((num) => num > 0);
//   return positive.length;
// };

// console.log(findPositiveNumber());

// const numbersS = [1, 2, 3, 4, 5, 6];

// const evenNumber = () => {
//   const multiplicationEven = numbersS
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 2);

//   return multiplicationEven;
// };

// console.log(evenNumber());

// const letters = ["a", "B", "e", "K", "i", "o"];

// const countLowercaseLetters = () => {
//   const lettter = letters.filter((l) => l === l.toLowerCase());

//   return lettter.length;
// };

// console.log(countLowercaseLetters());

// const names = ["john", "sarah", "mike"];

// const reduceNames = () => {
//   const name = names.join("").toUpperCase();
//   return name;
// };

// console.log(reduceNames());

// const changeText = () => {
//   const redBtn = document.getElementById("redBtn");
//   const test = document.getElementById("test");

//   redBtn.style.backgroundColor = "red";
//   test.style.backgroundColor = "red";
// };

// const toggleButton = () => {
//   const info = document.getElementById("info");
//   const toggleBtn = document.getElementById("toggleBtn");

//   toggleBtn.addEventListener("click", () => {
//     if (info.style.display === "block") {
//       info.style.display = "none";
//     } else {
//       info.style.display = "block";
//     }
//   });
// };

// toggleButton();

// const encreaseNumber = () => {
//   const count = document.getElementById("count");
//   const btn = document.getElementById("increaseBtn");

//   btn.addEventListener("click", () => {
//     count.textContent++;
//   });
// };

// encreaseNumber();

// const inputValue = document.getElementById("num");
// const btn = document.querySelectorAll("button");

// let firstNum = "";
// let secondNum = "";
// let operator = "";

// const calculator = () => {
//   btn.forEach((b) => {
//     b.addEventListener("click", () => {
//       const value = b.textContent;

//       if (value === "C") {
//         inputValue.value = "";
//         firstNum = "";
//         secondNum = "";
//         operator = "";
//         return;
//       }

//       // if (value === "=") {
//         const num1 = Number(firstNum);
//         const num2 = Number(secondNum);

//         let result;

//         switch (operator) {
//           case "+":
//             result = num1 + num2;
//             break;

//           case "-":
//             result = num1 - num2;
//             break;
//           case "*":
//             result = num1 * num2;
//             break;

//           case "/":
//             result = num1 / num2;
//             break;
//         }

//         inputValue.value = result;
//         firstNum = result.toString();
//         secondNum = "";
//         operator = "";

//         return;
//       // }
//     });
//   });
// };

// calculator();

// This lab is about converting special characters in a string with their corresponding HTML entities.
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a convertHTML function that accepts a string as an argument.
// The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.
// 4&amp;.
// < should be converted to &lt;.
// > should be converted to &gt;.
// " should be converted to &quot;.
// ' should be converted to &apos;.

// const convertHTML = (entities) => {
//   const ent = {
//     // "<": "&lt",
//     // ">": "&gt",
//     // '"': "&quot",
//     // "'": "&apos",

//     "&lt": "<",
//     "&gt": ">",
//     "&quot": '"',
//     "&apos": "'",
//   };

//   return ent[entities];
// };

// console.log(convertHTML("&lt"));

// const getAverage = (num) => {
//   const average = num.reduce((a, b) => a + b);
//   return average / num.length;
// };

// console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8]));

// const getGrade = (param) => {
//   if (param >= 0 && param <= 59) {
//     return "F";
//   } else if (param >= 60 && param <= 69) {
//     return "D";
//   } else if (param >= 70 && param <= 79) {
//     return "C";
//   } else if (param >= 80 && param <= 89) {
//     return "B";
//   } else if (param >= 90 && param <= 99) {
//     return "A";
//   } else if (param === 100) {
//     return "A+";
//   }
// };

// console.log(getGrade(100));

// const students = [
//   {
//     id: 0,
//     fullName: "Enver Ghobeglejiashvili",
//     averageGrade: 56,
//   },
//   {
//     id: 1,
//     fullName: "Giorgi Gugunava",
//     averageGrade: 100,
//   },
//   {
//     id: 2,
//     fullName: "Zviad Zviadadze",
//     averageGrade: 20,
//   },
//   {
//     id: 3,
//     fullName: "Zeqire Zeqiradze",
//     averageGrade: 36,
//   },
// ];

// const hassPassingGrade = () => {
//   const studentsGrade = students.map((grade) => {
//     let gradeAverage;
//     if (grade.averageGrade >= 0 && grade.averageGrade <= 59) {
//       gradeAverage = "F";
//     } else if (grade.averageGrade >= 60 && grade.averageGrade <= 69) {
//       gradeAverage = "D";
//     } else if (grade.averageGrade >= 70 && grade.averageGrade <= 79) {
//       gradeAverage = "C";
//     } else if (grade.averageGrade >= 80 && grade.averageGrade <= 89) {
//       gradeAverage = "B";
//     } else if (grade.averageGrade >= 90 && grade.averageGrade <= 99) {
//       gradeAverage = "A";
//     } else if (grade.averageGrade === 100) {
//       gradeAverage = "A+";
//     }
//     return {
//       ...grade,
//       gradeAverage,
//     };
//   });
//   return studentsGrade;
// };

// console.log(hassPassingGrade());

// function isInteresting(number, awesomePhrases) {
//   function check(n) {
//     const str = String(n);

//     if (str.length < 3) {
//       return false;
//     }

//     const digits = str.split("").map(Number);
//     const same = digits.every((dig) => dig === digits[0]);
//     const zeros = digits[0] !== 0 && digits.slice(1).every((dig) => dig === 0);
//     const palindrome = str === str.split("").reverse().join("");
//     const sequentialIncrement = "1234567890".includes(str);
//     const sequentialDecre = "9876543210".includes(str);
//     const awesome = awesomePhrases.includes(n);

//     return (
//       same ||
//       zeros ||
//       palindrome ||
//       sequentialIncrement ||
//       sequentialDecre ||
//       awesome
//     );
//   }

//   if (check(number)) return 2;

//   if (check(number + 1) || check(number + 2)) return 1;

//   return 0;
// }

// console.log(isInteresting(3, [1337, 256]));
// console.log(isInteresting(1336, [1337, 256]));
// console.log(isInteresting(1337, [1337, 256]));
// console.log(isInteresting(11208, [1337, 256]));
// console.log(isInteresting(11209, [1337, 256]));
// console.log(isInteresting(11211, [1337, 256]));

// function cogsebi(gears, connections, driverId, driverRpm) {
//   const n = gears.length;

//   const graph = Array.from({ length: n }, () => []);

//   for (const [a, b] of connections) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   const rpm = Array(n).fill(0);
//   const visited = Array(n).fill(false);

//   rpm[driverId] = driverRpm;

//   function dfs(curr) {
//     visited[curr] = true;

//     for (const next of graph[curr]) {
//       if (!visited[next]) {
//         rpm[next] = -rpm[curr] * (gears[curr] / gears[next]);
//         dfs(next);
//       }
//     }
//   }

//   dfs(driverId);

//   return rpm;
// }

// console.log(
//   cogsebi(
//     [10, 20, 50],
//     [
//       [0, 1],
//       [1, 2],
//     ],
//     0,
//     10,
//   ),
// );

// function splitOddAndEven(n) {
//   const digits = String(n).split("").map(Number);
//   const result = [];

//   let currentGroup = "" + digits[0];

//   for (let i = 1; i < digits.length; i++) {
//     const prev = digits[i - 1];
//     const curr = digits[i];

//     if (prev % 2 === curr % 2) {
//       currentGroup += curr;
//     } else {
//       result.push(Number(currentGroup));
//       currentGroup = "" + curr;
//     }
//   }

//   result.push(Number(currentGroup));

//   return result;
// }

// console.log(splitOddAndEven(122, 60, 11));

// function equalize(array) {
//   let num = array[0];

//   return array.map((a) => {
//     const diff = a - num;
//     return diff >= 0 ? `+${diff}` : `${diff}`;
//   });
// }

// console.log(equalize([10, 20, 25, 0]));
// console.log(equalize([20, 30, 35, 10]));
// console.log(equalize([10, 12, 24, 50, 0, 15, 20]));

// function arrayPlusArray(arr1, arr2) {
//   let array1 = arr1.reduce((a, b) => a + b);
//   let array2 = arr2.reduce((a, b) => a + b);

//   return array1 + array2;
// }

// console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));

// function findEvenIndex(arr) {
//   let total = arr.reduce((a, b) => a + b);
//   let left = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let right = total - left - arr[i];

//     if (left === right) {
//       return i;
//     }
//     left += arr[i];
//   }
//   return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));

// function removeUrlAnchor(url) {
//   return url.split("#")[0];
// }
// console.log(removeUrlAnchor("www.codewars.com#about"));

// function capitals(word) {
//   let upercase = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       upercase.push(i);
//     }
//   }
//   return upercase;
// }

// console.log(capitals("CodEWaRs"));

// function sumStrings(a, b) {
//   let sting1 = a.length - 1;
//   let sting2 = b.length - 1;

//   let carry = 0;
//   let result = [];

//   for (; sting1 >= 0 || sting2 >= 0 || carry; sting1--, sting2--) {
//     let num1 = sting1 >= 0 ? Number(a[sting1]) : 0;
//     let num2 = sting2 >= 0 ? Number(b[sting2]) : 0;

//     let sum = num1 + num2 + carry;

//     result.push(sum % 10);
//     carry = Math.floor(sum / 10);
//   }

//   if (carry) {
//     result.push(carry);
//   }

//   return result.reverse().join("").replace(/^0+/, "") || "0";
// }
// console.log(sumStrings("123", "456"));

// function sumStrings(a, b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }
// console.log(sumStrings("123", "456"));

// const generateRandomId = () => {
//   return Math.random().toString(16).slice(2.18);
// };

// const generateRandomName = () => {
//   const names = [
//     "Josh",
//     "John",
//     "Alex",
//     "David",
//     "Michael",
//     "Chris",
//     "Daniel",
//     "James",
//     "Robert",
//     "Tom",
//   ];

//   return names[Math.floor(Math.random() * names.length)];
// };

// const generaterandomNickane = () => {
//   let nickName = "";
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < 6; i++) {
//     nickName += chars[Math.floor(Math.random() * chars.length)];
//   }

//   return nickName;
// };

// const generateArray = (count) => {
//   let result = [];
//   for (let i = 0; i < count; i++) {
//     result.push({
//       id: generateRandomId(),
//       name: generateRandomName(),
//       nickname: generaterandomNickane(),
//     });
//   }
//   return result;
// };

// console.log(generateArray(3));

function whatday(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (num < 1 || num > 7) {
    return "Wrong, please enter a number between 1 and 7";
  }
  return days[num - 1];
}
console.log(whatday(5));
