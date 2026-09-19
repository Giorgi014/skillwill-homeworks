document.addEventListener("DOMContentLoaded", function () {
  console.log("TechFlow App Loaded Successfully.");

  const calcButton = document.getElementById("calc-btn");

  if (calcButton) {
    calcButton.addEventListener("click", function () {
      console.log("კალკულატორის ღილაკზე დაჭერა დაფიქსირდა...");

      const planSelectElement = document.getElementById("plan-select");
      const planPrice = parseFloat(planSelectElement.value);

      const userCountInput = document.getElementById("user-count");
      const userCount = userCountInput.value;

      const monthCountInput = document.getElementById("month-count");
      const monthCount = parseInt(monthCountInput.value);

      const totalCost = planPrice * userCount * monthCount;

      const resultDisplay = document.getElementById("total-price-display");
      resultDisplay.innerText = "$" + totalCost;
    });
  }
});
