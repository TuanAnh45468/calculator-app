const themeSwitch = document.getElementById("theme-switch");
const delResetBtns = document.getElementsByClassName("delResetBtn1");
const numberBtns = document.getElementsByClassName("numberBtn1");
const equalBtn = document.querySelector(".equalBtn1");
const body = document.querySelector(".body1");
const toggle = document.querySelector(".toggle1");
const header = document.querySelector(".header1");
const resultSection = document.querySelector(".resultSection1");
const calculation = document.querySelector(".calculation1");

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
