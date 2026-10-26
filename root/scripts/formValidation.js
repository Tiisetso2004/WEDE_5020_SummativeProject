/* 
Basic Form Valdation Logic
Adapted from GeeksForGeeks (2026) 
*/

// Retrieve the form
const form = document.getElementById("signup-form");

// Attach an event listener 
form.addEventListener("submit", function (event) {
    // Prevent the form from being submitted by default
    event.preventDefault();

    // Clear previous errors on submit
    resetErrors();

    // Retrieve the values from the elements containing the inputs
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;

    // Boolean flag
    let isValid = true;

    // Retrieve error span elements
    const firstNameError = document.getElementById("firstname-error");
    const lastNameError = document.getElementById("lastname-error");
    const userNameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const checkboxError = document.getElementById("terms-error");

    // Regular expressions
    const nameRegex = /^[a-zA-Z]{2,30}$/;
    const userNameRegex = /^(?=.*[@$!%?#&_])[a-zA-Z@$!%?#&_]{5,30}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,30}$/;

    // Conditional validation statements
    if (!nameRegex.test(firstname)) {
        showError(firstNameError, "Name must be 2-30 letters.");
        isValid = false;
    }

    if (!nameRegex.test(lastname)) {
        showError(lastNameError, "Surname must be 2-30 letters.");
        isValid = false;
    }

    if (!userNameRegex.test(username)) {
        showError(userNameError, "Username must be 5-30 characters and include a special character.");
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        showError(emailError, "Invalid email format.");
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        showError(passwordError, "Password must have 8+ chars, 1 uppercase, 1 number, 1 special char.");
        isValid = false;
    }

    if (!terms) {
        showError(checkboxError, "Please accept the terms and conditions to continue.");
        isValid = false;
    }

    if (isValid) {
        // Clear all the form fields and display success message
        alert("Account Successfully created");
        form.reset();
    }
});

function showError(errorElement, message) {
    if (errorElement) {
        errorElement.innerText = message;
    }
}

function resetErrors() {
    document.getElementById("firstname-error").textContent = "";
    document.getElementById("lastname-error").textContent = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("terms-error").textContent = "";
}