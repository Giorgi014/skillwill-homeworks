function minUmbrellas(weather) {
  const badWeather = ["rainy", "thunderstorms"];

  let home = 0;
  let work = 0;
  let umbrela = 0;

  for (let i = 0; i < weather.length; i++) {
    if (!badWeather.includes(weather[i])) continue;
    if (i % 2 === 0) {
      if (home > 0) {
        home--;
      } else {
        umbrela++;
      }

      work++;
    } else {
      if (work > 0) {
        work--;
      } else {
        umbrela++;
      }

      home++;
    }
  }

  return umbrela;
}

console.log(
  minUmbrellas([
    "rainy",
    "cloudy",
    "sunny",
    "sunny",
    "cloudy",
    "thunderstorms",
  ]),
);
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]));
console.log(minUmbrellas(["cloudy"]));

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    const array = arr.filter((a) => a === arr[i]).length;

    if (array === 1) {
      return arr[i];
    }
  }

  //    const count = {};

  //   for (let i = 0; i < arr.length; i++) {
  //     count[arr[i]] = (count[arr[i]] || 0) + 1;
  //   }

  //   for (let i = 0; i < arr.length; i++) {
  //     if (count[arr[i]] === 1) {
  //       return arr[i];
  //     }
  //   }
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
