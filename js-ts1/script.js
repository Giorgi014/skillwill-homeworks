function multiplicationTable(size) {
  let array = [];

  for (let i = 1; i <= size; i++) {
    let arr = [];
    for (let j = 1; j <= size; j++) {
      arr.push(i * j);
    }
    array.push(arr);
  }

  return array;
}

console.log(multiplicationTable(3));

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let res = numbers[i] + numbers[j];
      if (res == target) return [i, j];
    }
  }
}
console.log(twoSum([1, 2, 3], 4));

// function solution(string) {
//   return string.replace(/[A-Z]/g, " $&");
// }

// console.log(solution("camelCasing"));

function solution(string) {
  let text = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      text += " " + string[i];
    } else {
      text += string[i];
    }
  }

  return text;
}
console.log(solution("camelCasing"));

function factorial(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}

console.log(factorial(5));

function angle(n) {
  return (n - 2) * 180;
}

export function countSmileys(arr) {
  let count = 0;
  for (const smile of arr) {
    if (
      smile === ":)" ||
      smile === ":-)" ||
      smile === ":~)" ||
      smile === ":D" ||
      smile === ":-D" ||
      smile === ":~D" ||
      smile === ";)" ||
      smile === ";-)" ||
      smile === ";~)" ||
      smile === ";D" ||
      smile === ";-D" ||
      smile === ";~D"
    ) {
      count++;
    }
  }
  return count;
}
