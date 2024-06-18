Subscription Form Validation
This JavaScript code implements a form validation process for a subscription form. The form includes fields for first name, last name, email, subscription preferences, and password. The validation checks the following:

First Name:
Must contain only letters
Must be between 3 and 50 characters long
Last Name:
Must contain only letters
Must be between 3 and 50 characters long
Email:
Must be a valid email address
Subscription Preferences:
At least one subscription preference must be selected
Password:
Must be at least 8 characters long
Must contain at least one uppercase letter
Must contain at least one lowercase letter
Must contain at least one number
Must contain at least one special character (!@#$%^&*_)
If all the validation checks pass, a success message is displayed, and the form fields are cleared. The success message is hidden after 3 seconds.

Usage
Include the JavaScript code in your HTML file, or save it in a separate JavaScript file and include it in your HTML file.
Create an HTML form with the following fields:
First Name (id="firstName")
Last Name (id="lastName")
Email (id="email")
Subscription Preferences (e.g., checkboxes with name="subscription")
Password (id="password")
A submit button
Add the following HTML elements to display error messages and the success message:
First Name Error (id="firstNameError")
Last Name Error (id="lastNameError")
Email Error (id="emailError")
Subscription Error (id="subscriptionError")
Password Error (id="passwordError")
Success Message (id="successMessage")