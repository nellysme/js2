document.addEventListener("DOMContentLoaded", function () {
  // find the form with ID `registerForm`
  const form = document.getElementById("registerForm");

  // find the email input
  const emailInput = document.getElementById("email");

  // find the error message div element
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    const email = emailInput.value;
    if (!email.endsWith("@noroff.no") && !email.endsWith("@stud.noroff.no")) {
      // set the error message and make it red
      errorMessage.textContent =
        "Only @noroff.no and @stud.noroff.no are allowed.";
      errorMessage.style.color = "red";
      event.preventDefault();
    }
  });
});
