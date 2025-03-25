document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let upiId = document.querySelector('#upiId').value.trim();
        let accountHolder = document.querySelector('#upiName').value.trim();
        let phoneNum = document.querySelector('#phoneNum').value.trim();
        let amount = document.querySelector('#amount').value.trim();

        // Validate UPI ID (basic format: text@upi)
        let upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+$/;
        if (!upiPattern.test(upiId)) {
            alert("Invalid UPI ID. It should be in format: example@upi");
            return;
        }

        // Validate Account Holder Name (at least 3 characters)
        if (accountHolder.length < 3) {
            alert("Invalid Account Holder Name. Must be at least 3 characters.");
            return;
        }

        // Validate Phone Number (must be 10 digits)
        let phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneNum)) {
            alert("Invalid Phone Number. It must be exactly 10 digits.");
            return;
        }

        // Validate Amount (must be a positive number)
        if (isNaN(amount) || parseFloat(amount) <= 0) {
            alert("Invalid Amount. Enter a valid positive number.");
            return;
        }

        // Confirmation before processing
        if (confirm(`Confirm payment of ₹${amount}?`)) {
            alert(`₹${amount} Payment Successfully Processed via UPI!`);
            document.querySelector('form').submit(); 
        }

        window.location.href="success.html";
    });

});
