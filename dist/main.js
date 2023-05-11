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

function updateTheme(themeValue) {
  const themeSuffixes = ["2", "3"];
  const currentThemeSuffix = themeSuffixes.includes(themeValue)
    ? themeValue
    : "";

  for (let suffix of themeSuffixes) {
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
themeSwitch.addEventListener("input", () => {
  updateTheme(themeSwitch.value);
});

let currentNumber = "";
let nextNumber = "";
let operatorArr = ["+", "-", "x", "/"];
let operator = null;
let result;

function performCalculation() {
  console.log("perform current", currentNumber);
  console.log("perform next", nextNumber);
  console.log("operator:", operator);
  switch (operator) {
    case "+":
      result = Number(currentNumber) + Number(nextNumber);
      break;
    case "-":
      result = Number(currentNumber) - Number(nextNumber);
      break;
    case "x":
      result = Number(currentNumber) * Number(nextNumber);
      break;
    case "/":
      if (nextNumber === "0") {
        alert("Cannot divide by zero");
        return;
      }
      result = Number(currentNumber) / Number(nextNumber);
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
    if (!operatorArr.includes(value) && !operator && value !== "DEL") {
      currentNumber += value;
    } else if (operatorArr.includes(value)) {
      operator = value;
    } else if (operator && value !== "=" && value !== "DEL") {
      nextNumber += value;
    }
    console.log("current number: ", currentNumber);
    console.log("next number: ", nextNumber);
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
