const themeSwitch = document.getElementById("theme-switch");
const delResetBtn1 = document.getElementsByClassName("delResetBtn1");
const numberBtn1 = document.getElementsByClassName("numberBtn1");
const equalBtn1 = document.querySelector(".equalBtn1");
const body1 = document.querySelector(".body1");
const toggle1 = document.querySelector(".toggle1");
const header1 = document.querySelector(".header1");
const resultSection1 = document.querySelector(".resultSection1");
const calculation1 = document.querySelector(".calculation1");

themeSwitch.addEventListener("input", () => {
  const themeValue = themeSwitch.value;
  console.log(themeValue);
  if (themeValue === "2") {
    for (let delResetBtn1Element of delResetBtn1) {
      delResetBtn1Element.classList.remove("delResetBtn3");
      delResetBtn1Element.classList.add("delResetBtn2");
    }

    for (let numberBtn1Element of numberBtn1) {
      numberBtn1Element.classList.remove("numberBtn3");
      numberBtn1Element.classList.add("numberBtn2");
    }

    body1.classList.add("body2");
    toggle1.classList.add("toggle2");
    equalBtn1.classList.add("equalBtn2");
    header1.classList.add("header2");
    resultSection1.classList.add("resultSection2");
    calculation1.classList.add("calculation2");
  }

  if (themeValue === "3") {
    console.log("theme 3");
    for (let delResetBtn1Element of delResetBtn1) {
      delResetBtn1Element.classList.add("delResetBtn3");
    }
  }

  if (themeValue === "1") {
    for (let delResetBtn1Element of delResetBtn1) {
      delResetBtn1Element.classList.remove("delResetBtn2");
      delResetBtn1Element.classList.remove("delResetBtn3");
    }

    for (let numberBtn1Element of numberBtn1) {
      numberBtn1Element.classList.remove("numberBtn2");
      numberBtn1Element.classList.remove("numberBtn3");
    }

    body1.classList.remove("body2");
    equalBtn1.classList.remove("equalBtn2");
    header1.classList.remove("header2");
    resultSection1.classList.remove("resultSection2");
    calculation1.classList.remove("calculation2");
    toggle1.classList.remove("toggle2");
  }
});
