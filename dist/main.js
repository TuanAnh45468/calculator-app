const THEME_SUFFIXES = ["2", "3"];
const OPERATORS = ["+", "-", "x", "/"];

const themeSwitch = document.getElementById("theme-switch");
const delResetBtns = document.getElementsByClassName("delResetBtn1");
const numberBtns = document.getElementsByClassName("numberBtn1");
const equalBtn = document.querySelector(".equalBtn1");
const body = document.querySelector(".body1");
const toggle = document.querySelector(".toggle1");
const header = document.querySelector(".header1");
const resultSection = document.querySelector(".resultSection1");
const calculation = document.querySelector(".calculation1");
const delBtn = document.getElementById("delBtn");
const resetBtn = document.getElementById("resetBtn");

let currentNumber = "";
let nextNumber = "";
let operator = null;
let result;

function updateTheme(themeValue) {
  const currentThemeSuffix = THEME_SUFFIXES.includes(themeValue)
    ? themeValue
    : "";

  for (let suffix of THEME_SUFFIXES) {
    const isCurrentTheme = suffix === currentThemeSuffix;

    for (let btn of delResetBtns) {
      btn.classList.toggle(`delResetBtn${suffix}`, isCurrentTheme);
    }

    for (let btn of numberBtns) {
      btn.classList.toggle(`numberBtn${suffix}`, isCurrentTheme);
    }

    body.classList.toggle(`body${suffix}`, isCurrentTheme);
    toggle.classList.toggle(`toggle${suffix}`, isCurrentTheme);
    equalBtn.classList.toggle(`equalBtn${suffix}`, isCurrentTheme);
    header.classList.toggle(`header${suffix}`, isCurrentTheme);
    resultSection.classList.toggle(`resultSection${suffix}`, isCurrentTheme);
    calculation.classList.toggle(`calculation${suffix}`, isCurrentTheme);
  }
}
updateTheme(themeSwitch.value);
themeSwitch.addEventListener("input", () => {
  updateTheme(themeSwitch.value);
});

function performCalculation() {
  const a = Number(currentNumber);
  const b = Number(nextNumber);
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "x":
      result = a * b;
      break;
    case "/":
      if (nextNumber === "0") {
        alert("Cannot divide by zero");
        return;
      }
      result = a / b;
      break;
    default:
      return;
  }

  result = String(result);
}

function updateDisplay() {
  const resultSection = document.querySelector(".resultSection1");
  resultSection.textContent = `${currentNumber} ${
    operator || ""
  } ${nextNumber}`;
}

function displayResult() {
  resultSection.textContent = result;
}

for (let btn of numberBtns) {
  btn.addEventListener("click", (event) => {
    const value = event.target.textContent;
    if (!OPERATORS.includes(value) && !operator && value !== "DEL") {
      currentNumber += value;
    } else if (OPERATORS.includes(value)) {
      operator = value;
    } else if (operator && value !== "=" && value !== "DEL") {
      nextNumber += value;
    }
    updateDisplay();
  });
}
const operatorBtns = document.querySelectorAll(".operatorBtn");
for (let operatorBtn of operatorBtns) {
  operatorBtn.addEventListener("click", (event) => {
    if (currentNumber && nextNumber) {
      performCalculation();
      currentNumber = result;
      nextNumber = "";
    }
    operator = event.target.textContent;
    updateDisplay();
  });
}

equalBtn.addEventListener("click", () => {
  if (currentNumber && nextNumber) {
    performCalculation();
    displayResult();
    currentNumber = result;
    nextNumber = "";
    operator = null;
  }
});

resetBtn.addEventListener("click", () => {
  currentNumber = "";
  nextNumber = "";
  operator = null;
  updateDisplay();
});

delBtn.addEventListener("click", () => {
  if (nextNumber) {
    nextNumber = nextNumber.slice(0, -1);
  } else if (!nextNumber && operator) {
    operator = operator.slice(0, -1);
  } else if (!operator && !nextNumber) {
    currentNumber = currentNumber.slice(0, -1);
  } else if (result) {
    result = result.slice(0, -1);
  }
  updateDisplay();
});
