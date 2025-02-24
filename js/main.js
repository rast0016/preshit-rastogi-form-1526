const submitButton = document.getElementById("submit-button");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Function
function validateForm() {
    let formData = {};
    let errors = [];

    // Full Name
    if (fullNameInput.value.trim() !== "") {
        formData.fullname = fullNameInput.value.trim();
    } else {
        errors.push("Full Name is required.");
    }

    // Email
    if (emailInput.value.trim() !== "") {
        if (emailPattern.test(emailInput.value.trim())) {
            formData.email = emailInput.value.trim();
        } else {
            errors.push("Enter a valid email.");
        }
    } else {
        errors.push("Email is required.");
    }

    // Message
    if (messageInput.value.trim() !== "") {
        formData.message = messageInput.value.trim();
    } else {
        errors.push("Message is required.");
    }

    // Errors
    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Form Data:", formData);
        fullNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }
}

// Submit Button
submitButton.addEventListener("click", validateForm);
