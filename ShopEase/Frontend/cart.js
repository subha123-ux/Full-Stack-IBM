

// Retrieve cart data from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
function displayCart() {
    let cartContainer = document.getElementById("cart");
    let totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !totalPriceElement) return;

    // Reset the table content
    cartContainer.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
    `;

    let totalPrice = 0;

    cart.forEach((item, index) => {
        let row = cartContainer.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.category}</td>
            <td><img src="${item.image}" alt="Product" style="width: 50px; height: 50px;"></td>
            <td>${item.rating}</td>
            <td>
                <button onclick="remvQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="addQuantity(${index})">+</button>
            </td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;

        totalPrice += item.price * item.quantity;
    });

    // Update total price
    totalPriceElement.innerText = `₹${totalPrice.toFixed(2)}`;

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to increase item quantity
function addQuantity(index) {
    cart[index].quantity += 1;
    displayCart(); // Update cart display
}

// Function to decrease item quantity
function remvQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeItem(index); // Remove item if quantity reaches zero
    }
    displayCart();
}




// function addQuantity(index) {
//     if (!cart[index].quantity) {
//         cart[index].quantity = 1; // Ensure default quantity is 1
//     }
//     cart[index].quantity += 1;
//     updateCart();
// }

// // Function to decrease item quantity
// function remvQuantity(index) {
//     if (cart[index].quantity > 1) {
//         cart[index].quantity -= 1;
//     } else {
//         removeItem(index); // Remove item if quantity reaches zero
//     }
//     updateCart();
// }





// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

// Checkout function
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    window.location.href = "payment.html";
}

// Back to products
function backToProducts() {
    window.location.href = "index.html";
}

// Initialize cart display on page load
document.addEventListener("DOMContentLoaded", displayCart);
