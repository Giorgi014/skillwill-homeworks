function solution(string: string): string {
  let text: string = "";

  for (let i: number = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      text += " " + string[i];
    } else {
      text += string[i];
    }
  }

  return text;
}
console.log(solution("camelCasing"));

function factorial(n: number): number {
  let num: number = 1;
  for (let i: number = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}

console.log(factorial(5));

function angle(n: number): number {
  return (n - 2) * 180;
}

function countSmileys(arr: string[]): number {
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
