// script.js
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from submitting traditionally

        // Perform basic form validation
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!firstName || !lastName || !phoneNumber || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        // If all fields are filled, display the form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            message: message,
        };

        // For demonstration purposes, alert the form data
        alert(JSON.stringify(formData, null, 2));
    });
});
