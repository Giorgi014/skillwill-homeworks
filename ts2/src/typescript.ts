const weight = document.getElementById("weight") as HTMLInputElement;
const height = document.getElementById("height") as HTMLInputElement;
const btn = document.getElementById("calculate") as HTMLButtonElement;
const resetBtn = document.getElementById("reset") as HTMLButtonElement;
const bmiInfo = document.getElementById("bmiInfo") as HTMLSpanElement;
const messages = document.getElementById("messages") as HTMLParagraphElement;

let result: string;

type userData = {
  weight: number;
  height: number;
};

const bmiCalculate = (weight: number, height: number): number => {
  return Number((weight / (height * height)).toFixed(2));
};

const getUserData = (): userData => {
  return {
    weight: Number(weight.value),
    height: Number(height.value),
  };
};

const validateInputs = (
  weightValue: string,
  heightValue: string,
): string | null => {
  if (!weightValue.trim() || !heightValue.trim()) {
    return (messages.textContent = "Both fields are required.");
  }
  if (Number.isNaN(Number(weightValue)) || Number.isNaN(Number(heightValue))) {
    return (messages.textContent = "You must enter a number in both fields.");
  }
  if (!heightValue.includes(".")) {
    return "Height must be a decimal number.";
  }

  return null;
};

const displayMessage = (message: string): void => {
  messages.textContent = message;
};

const displayBmi = (bmi: number, bmiStatus: string): void => {
  bmiInfo.textContent = `${bmi.toString()} ${bmiStatus.toString()}`;
};

const clearInputs = (): void => {
  weight.value = "";
  height.value = "";
};

const clearOutputs = (): void => {
  messages.textContent = "";
  bmiInfo.textContent = "";
};

const validateBmi = (bmi: number): string => {
  if (bmi <= 0) {
    return "Invalid BMI";
  } else if (bmi > 0 && bmi < 18.5) {
    return "You are Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "You are Normal weight";
  } else if (bmi > 25 && bmi < 29.9) {
    return "You are Overweight";
  } else if (bmi > 30 && bmi < 34.9) {
    return "You are Obesity Class-1";
  } else if (bmi > 35 && bmi < 39.9) {
    return "You are Obesity Class-2";
  } else {
    return "You are Obesity Class-3";
  }
};

const calculate = (): void => {
  const error = validateInputs(weight.value, height.value);

  if (error) {
    displayMessage(error);
    return;
  }

  const userData = getUserData();

  const bmi = bmiCalculate(userData.weight, userData.height);

  const bmiStatus = validateBmi(bmi);

  displayBmi(bmi, bmiStatus);
};

const resetInfo = (): void => {
  clearInputs();
  clearOutputs();
};

const initCalculateBtn = () => {
  btn.addEventListener("click", calculate);
};

const initResetBtn = () => {
  resetBtn.addEventListener("click", resetInfo);
};

initCalculateBtn();
initResetBtn();
