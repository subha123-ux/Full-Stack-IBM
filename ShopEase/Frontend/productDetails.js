const prodimg = [
    {
        "id": 1,
        "image": "https://images-cdn.ubuy.co.in/65979c2cb910f53d2e6e34ae-3-5cu-ft-compact-refrigerator-mini.jpg"
    },
    {
        "id": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcKB-ZzmzJXdu8y9mluEQgMRcO-zl7wed8A&"
    },
    {
        "id": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcKB-ZzmzJXdu8y9mluEQgMRcO-zl7wed8A&s"
    },
    {
        "id": 4,
        "image": "https://m.media-amazon.com/images/I/81oM89l7hfL.jpg"
    }
];

function displayProducts(productList = prodimg) {
    let productContainer = document.getElementById("pimg");
    productContainer.innerHTML = "";

    productList.forEach(product => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <a href="${product.image}"><img src="${product.image}" alt="Product Image" style="height: 300px; width: 200px;"></a>
        `;
        productContainer.appendChild(div);
    });
    
}


const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");

stars.forEach((star) => {
	star.addEventListener("click", () => {
		const value = parseInt(star.getAttribute("data-value"));
		rating.innerText = value;

		// Remove all existing classes from stars
		stars.forEach((s) => s.classList.remove("one", 
												"two", 
												"three", 
												"four", 
												"five"));

		// Add the appropriate class to 
		// each star based on the selected star's value
		stars.forEach((s, index) => {
			if (index < value) {
				s.classList.add(getStarColorClass(value));
			}
		});

		// Remove "selected" class from all stars
		stars.forEach((s) => s.classList.remove("selected"));
		// Add "selected" class to the clicked star
		star.classList.add("selected");
	});
});

submitBtn.addEventListener("click", () => {
	const review = reviewText.value;
	const userRating = parseInt(rating.innerText);

	if (!userRating || !review) {
		alert(
"Please select a rating and provide a review before submitting."
			);
		return;
	}

	if (userRating > 0) {
		const reviewElement = document.createElement("div");
		reviewElement.classList.add("review");
		reviewElement.innerHTML = 
`<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
		reviewsContainer.appendChild(reviewElement);

		// Reset styles after submitting
		reviewText.value = "";
		rating.innerText = "0";
		stars.forEach((s) => s.classList.remove("one", 
												"two", 
												"three", 
												"four", 
												"five", 
												"selected"));
	}
});

function getStarColorClass(value) {
	switch (value) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		case 5:
			return "five";
		default:
			return "";
	}
}




displayProducts();
