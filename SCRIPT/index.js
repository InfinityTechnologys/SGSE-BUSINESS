function start() {
  window.location.href = "login.html";
}

function menu() {
  window.location.href = "menu.html";
}

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").classList.add("hidden");
  }, 1000);
});

function showErrorMessage(message) {
  let errorBox = document.getElementById("errorBox");
  let errorText = document.getElementById("errorText");

  errorText.innerHTML = message;
  errorBox.style.display = "block";

  setTimeout(() => {
    errorBox.style.opacity = "1";
    errorBox.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    closeError();
  }, 3000);
}

function closeError() {
  let errorBox = document.getElementById("errorBox");
  errorBox.style.opacity = "0";
  errorBox.style.transform = "translateY(-10px)";

  setTimeout(() => {
    errorBox.style.display = "none";
  }, 500);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("site-theme", next);
}

const savedTheme = localStorage.getItem("site-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}
