const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toggleLogin = document.getElementById("toggle-login");
const toggleRegister = document.getElementById("toggle-register");

// Show login form and hide register form initially
loginForm.style.display = "block";
registerForm.style.display = "none";

// Toggle between login and register forms
toggleLogin.addEventListener("click", function () {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

toggleRegister.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Remaining code for input field focus and blur functionality
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
