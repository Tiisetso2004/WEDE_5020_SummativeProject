/* 
Basic form valdation logic.
Adapted from GeeksForGeeks (2026) 
*/

//Form retrieval
const contactForm = document.getElementById("contact-form");

//Global boolean flag
let isValid = true;

//event listener
contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    //reset value for checks
    resetAllErrors();
    isValid = true;

    const name = retrieveElementValueById("name");
    const email = retrieveElementValueById("email");
    const subject = retrieveElementValueById("subject");
    const message = retrieveElementValueById("message");

    //Regex
    const nameRegex = /^[a-zA-Z]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //Positive lookahead for at least one alphabetic character
    const subjectRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9 _.-]{2,30}$/;
    //Allows any character including newlines and spaces 1-500 characters
    const messageRegex = /^(?=.*[a-zA-Z])[\s\S]{3,500}$/;

    //Validate inputs with helper
    formInputValidator("name-error", "Name must be 2-30 letters.", name, nameRegex);
    formInputValidator("email-error", "Please enter a valid email.", email, emailRegex);
    formInputValidator("subject-error", "Please fill in this field", subject, subjectRegex);
    formInputValidator("message-error", "Please fill in this field", message, messageRegex);

    //Stop if something goes wrong
    if (!isValid) {
        return;
    }

    //Asynchronous form submission (AJAX)
    try {
        const formData = new FormData(contactForm);

        //send form data to endpoint url
        const response = await fetch("https://formspree.io/f/mjyyegyw", {
            method: 'POST',
            body: formData,
            headers: {
                //respond in JSON format
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Message Delivered Successfully! Check Your email inbox.");
            contactForm.reset();
        } else {
            //for errors
            const data = await response.json();
            if (data.errors) {
                alert(data.errors.map(error => error.message).join(", "));
            } else {
                alert("Something went wrong. Please try again");
            }
        }
    }
    catch (error) {
        console.error("Network error:", error);
        alert("Network error. Please Check your internet connection.");
    }
});

function retrieveElementValueById(elementId) {
    const element = document.getElementById(elementId);

    //Ensure element exists before trying to read value
    if (!element) {
        console.warn(`Element with ID: "${elementId}" not found.`);
        isValid = false;
        return;
    }
    //success
    return element.value.trim();
}

function showError(errorElementId, errorMessage) {

    //Retrieve target element
    const errorElement = document.getElementById(errorElementId);

    //Guard clauses
    if (!errorElement) {
        console.warn(`Element with ID: "${errorElementId}" was not found.`);
        isValid = false;
        return;
    }

    if (!errorMessage) {
        console.warn(`Error message for element: ["${errorElementId}"] cannot be empty`);
        isValid = false;
        return;
    }

    //Display message after all checks pass
    errorElement.innerText = errorMessage;
    isValid = false;
}

function resetAllErrors() {

    //Query selector targets members of specified class
    const errorElements = document.querySelectorAll(".error-element");

    //Iterate through each element and change text content
    errorElements.forEach(element => {
        element.textContent = "";
    });
}

//Input validation helper implementing helpers
function formInputValidator(errorElmentId, errorMessage, input, regex) {
    if (!regex.test(input) || input === null || input === "") {
        showError(errorElmentId, errorMessage);
        isValid = false;
    }
}