const toggleSwitchElm = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";
//Dark Or Light Images
const imageMode = color => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};
const toggleDarkLightMode = mode => {
  nav.style.backgroundColor =
    mode === DARK_THEME ? "rgb(0 0 0 /50%)" : "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor =
    mode === DARK_THEME ? "rgb(255 255 255 /50%)" : "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent =
    mode === DARK_THEME ? "Dark Mode" : "Light Mode";
  mode === DARK_THEME
    ? toggleIcon.children[1].classList.replace("fa-sun-o", "fa-moon-o")
    : toggleIcon.children[1].classList.replace("fa-sun-o", "fa-moon-o");
  mode === DARK_THEME ? imageMode("dark") : imageMode("light");
};

const switchTheme = e => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(LIGHT_THEME);
  }
};
//Event Listener
toggleSwitchElm.addEventListener("change", switchTheme);
//check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitchElm.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
