document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(error => {
    error.textContent = '';
  });

  // Validate First Name
  const firstName = document.getElementById('firstName').value.trim();
  if (!/^[a-zA-Z]{3,50}$/.test(firstName)) {
    document.getElementById('firstNameError').textContent = 'First name should contain only letters and should have 3 to 49 characters.';
    isValid = false;
  }

  // Validate Last Name
  const lastName = document.getElementById('lastName').value.trim();
  if (!/^[a-zA-Z]{3,50}$/.test(lastName)) {
    document.getElementById('lastNameError').textContent = 'Last name should contain only letters and should have 3 to 49 characters.';
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    isValid = false;
  }