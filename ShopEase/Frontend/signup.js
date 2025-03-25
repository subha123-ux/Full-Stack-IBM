
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let username = document.getElementById("username").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("conpassword").value;

        // Check if the phone number is exactly 10 digits
        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Store user details in localStorage
        let user = {
            username: username,
            phone: phone,
            password: password // In real applications, never store passwords in plain text
        };

        localStorage.setItem("user_" + phone, JSON.stringify(user)); // Store user data with phone as the key

        alert("Successfully created an account!");
        window.location.href = "index.html"; // Redirect to index.html
    });
});
