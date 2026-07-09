const input = document.getElementById("input");
const btn = document.getElementById("btn");

const inputTetx = () => {
  let array = [];

  btn.addEventListener("click", () => {
    const val = input.value;

    array.push(val);
    input.value = "";
    console.log(array);
  });
};

inputTetx();
