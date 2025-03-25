document.getElementById("submit-product").addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const price = document.getElementById("price").value.trim();
    const category = document.getElementById("category").value.trim();
    const imageInput = document.getElementById("image");

    if (!name || !desc || !price || !category || !imageInput.value) {
        alert("Please fill all fields and provide an image URL.");
        return;
    }

    const image = imageInput.value;
    const product = { name, price, category, image, desc };

    try {
        const response = await fetch("http://localhost:8080/api/create-product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        if (response.ok) {
            // Redirect only after a successful API response
            window.location.href = "index.html";
        } else {
            alert("Failed to create product.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }
});
