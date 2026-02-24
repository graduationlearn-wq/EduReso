// BUG FIX: querySelector("email") → getElementById("email")
// Note: Validation is now handled inline in Register.html
// This file is kept for legacy compatibility
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (!form) return;

  const emailInput = document.getElementById("reg-email") || document.getElementById("email");

  if (form && emailInput) {
    form.addEventListener("submit", function (event) {
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        event.preventDefault();
      }
    });
  }
});
