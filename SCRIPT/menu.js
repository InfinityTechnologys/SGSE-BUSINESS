function main() {
    window.location.href = "index.html";
}

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