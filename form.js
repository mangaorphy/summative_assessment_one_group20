function validateForm(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const subscriptionInputs = document.querySelectorAll('input[name="subscription"]:checked');

    const firstNameRegex = /^[A-Z][a-zA-Z]*$/;
    const lastNameRegex = /^[A-Z][a-zA-Z]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    //Here's the continuation of the JavaScript code:


  // Validate first name
  if (!firstNameRegex.test(firstNameInput.value)) {
    showErrorMessage(firstNameInput, 'First name must contain letters only');
    return;
  } else {
    hideErrorMessage(firstNameInput);
  }

  // Validate last name
  if (!lastNameRegex.test(lastNameInput.value)) {
    showErrorMessage(lastNameInput, 'Last name must contain letters only');
    return;
  } else {
    hideErrorMessage(lastNameInput);
  }

  // Validate email
  if (!emailRegex.test(emailInput.value)) {
    showErrorMessage(emailInput, 'Invalid email format');
    return;
  } else {
    hideErrorMessage(emailInput);
  }

  // Validate password
  if (!passwordRegex.test(passwordInput.value)) {
    showErrorMessage(passwordInput, 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one special character (!@#$%^&*), and one number');
    return;
  } else {
    hideErrorMessage(passwordInput);
  }

  // Get selected subscription preferences
  const subscriptions = Array.from(subscriptionInputs).map(input => input.value);

  // Form validation successful
  const successMessage = document.createElement('p');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Registration successful!';
  document.getElementById('registrationForm').appendChild(successMessage);
}

function showErrorMessage(input, message) {
  const errorMessage = document.createElement('p');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  input.parentNode.appendChild(errorMessage);
}

function hideErrorMessage(input) {
  const errorMessage = input.parentNode.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}