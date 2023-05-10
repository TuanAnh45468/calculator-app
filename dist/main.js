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
    body1.classList.remove("body3");
    toggle1.classList.add("toggle2");
    toggle1.classList.remove("toggle3");
    equalBtn1.classList.add("equalBtn2");
    equalBtn1.classList.remove("equalBtn3");
    header1.classList.add("header2");
    header1.classList.remove("header3");
    resultSection1.classList.add("resultSection2");
    resultSection1.classList.remove("resultSection3");
    calculation1.classList.add("calculation2");
    calculation1.classList.remove("calculation3");
  }

  if (themeValue === "3") {
    for (let delResetBtn1Element of delResetBtn1) {
      delResetBtn1Element.classList.add("delResetBtn3");
    }

    for (let numberBtn1Element of numberBtn1) {
      numberBtn1Element.classList.add("numberBtn3");
      numberBtn1Element.classList.remove("numberBtn2");
    }

    body1.classList.add("body3");
    toggle1.classList.add("toggle3");
    equalBtn1.classList.add("equalBtn3");
    header1.classList.add("header3");
    resultSection1.classList.add("resultSection3");
    calculation1.classList.add("calculation3");
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
    body1.classList.remove("body3");
    equalBtn1.classList.remove("equalBtn2");
    equalBtn1.classList.remove("equalBtn3");
    header1.classList.remove("header2");
    header1.classList.remove("header3");
    resultSection1.classList.remove("resultSection2");
    resultSection1.classList.remove("resultSection3");
    calculation1.classList.remove("calculation2");
    calculation1.classList.remove("calculation3");
    toggle1.classList.remove("toggle2");
    toggle1.classList.remove("toggle3");
  }
});
