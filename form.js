let form = document.getElementById("registrationForm")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  
  const firstnameinput = document.getElementById("firstName");
  const lastnameinput = document.getElementById("lastName");
  const emailinput = document.getElementById("email");
  const passwordinput = document.getElementById("password");
  const subscriptionInputs = document.querySelectorAll('input[name="subscription"]:checked');
  const errormessage = document.getElementsByClassName("error");

  const firstNameRegex = /^[A-Za-z]{3,50}$/;
  if (!firstNameRegex.test(firstnameinput.value)) {
    showErrorMessage
  }
} )