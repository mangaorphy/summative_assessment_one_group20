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

                                                             // Validate Subscription Preferences
    const subscriptions = document.querySelectorAll('input[name="subscription"]:checked');
    if (subscriptions.length === 0) {
        document.getElementById('subscriptionError').textContent = 'Select at least one subscription preference.';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
        passwordError.textContent += ' Must contain at least one uppercase letter.';
        isValid = false;
    }
    if (!/[a-z]/.test(password)) {
        passwordError.textContent += ' Must contain at least one lowercase letter.';
        isValid = false;
    }
    if (!/[0-9]/.test(password)) {
        passwordError.textContent += ' Must contain at least one number.';
        isValid = false;
    }
    if (!/[!@#$%^&*_]/.test(password)) {
        passwordError.textContent += ' Must contain at least one special character: !@#$%^&*';
        isValid = false;
    }

    if (isValid) {
        // If form is valid, you can proceed with form submission or further processing.
        // For this example, we'll just alert a success message.
        document.getElementById('successMessage').style.display = 'block';

         // Clear the form fields
         document.getElementById('subscriptionForm').reset();

         // Hide the success message after 3 seconds
         setTimeout(() => {
             document.getElementById('successMessage').style.display = 'none';
         }, 3000);
    }
});


