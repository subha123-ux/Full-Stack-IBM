
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;

        let storedUser = localStorage.getItem("user_" + phone);

        if (storedUser) {
            let user = JSON.parse(storedUser);

            if (user.password === password) {
                alert("Successfully Logged In!");
                window.location.href = "index.html"; // Redirect to index.html
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert("User not found. Please create an Account.");
            window.location.href="signup.html";
        }
    });
});
