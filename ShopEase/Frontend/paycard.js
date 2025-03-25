
document.addEventListener("DOMContentLoaded", () => {
    let cardNumInput = document.querySelector('#cardNum');

    cardNumInput.addEventListener('input', () => {
        let cNumber = cardNumInput.value.replace(/\D/g, "").substring(0, 16);
        cNumber = cNumber.replace(/(.{4})/g, "$1 ").trim();
        cardNumInput.value = cNumber;
    });

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); 

        let cardNum = cardNumInput.value.replace(/\s/g, ""); 
        let cardHolder = document.querySelector('#cardName').value.trim();
        let expiryMonth = document.querySelector('#expMonth')?.value;
        let expiryYear = document.querySelector('#expYear')?.value;
        let amount = document.querySelector('#amount').value.trim();

        if (!/^\d{16}$/.test(cardNum)) {
            alert("Invalid Card Number. It must be 16 digits.");
            return;
        }

        if (cardHolder.length < 3) {
            alert("Invalid Cardholder Name. Must be at least 3 characters.");
            return;
        }

        if (isNaN(amount) || parseFloat(amount) <= 0) {
            alert("Invalid Amount. Enter a valid positive number.");
            return;
        }

        if (confirm(`Confirm payment of $${amount}?`)) {
            alert(`$${amount} Payment Successfully Processed!`);
            document.querySelector('form').submit(); 
        }

        window.location.href="success.html";
    });
});
