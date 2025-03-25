const products = [
    {
      "id": 1,
      "category": "Electronics",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQI2yaBrsOhg60x5FPzVUiINeZVKQdCQn58PkSVcFW-htMNxKHmDlWa2sHDc814ubs5q8zKmxyxZDaJv9EfY2zUeIZTfe2NLXxmpz3xKDLa3oUoybYwyZbD"
    },
    {
      "id": 2,
      "category": "Fashion",
      "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/8db7a22fd8a14673a4d95c38624139ca_9366/Galaxy_7_Running_Shoes_Black_ID8765_HM1.jpg"
    },
    {
      "id": 3,
      "category": "Furniture",
      "image": "https://m.media-amazon.com/images/I/71peaqU+lsL.jpg"
    },
    {
      "id": 4,
      "category": "Toy",
      "image": "https://cdn.pixabay.com/photo/2015/11/16/15/57/fire-1045906_640.jpg"
    },
    {
      "id": 5,
      "category": "Fitness",
      "image": "https://www.hindustantimes.com/ht-img/img/2024/06/27/550x309/amazon_deals_fitness_equipment_treadmills_for_home_1719478784719_1719478792532.JPG"
    },
    {
      "id": 6,
      "category": "Jwelary",
      "image": "https://5.imimg.com/data5/ANDROID/Default/2020/12/FM/BV/HS/100169069/product-jpeg-500x500.jpg"
    },
    {
      "id": 7,
      "category": "Beauty",
      "image": "https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min.jpeg"
    },
    {
      "id": 8,
      "category": "Dry Foods",
      "image": "https://media.gettyimages.com/id/155421320/photo/mixed-nuts.jpg?s=612x612&w=gi&k=20&c=k7YDwN-TEkOm2i_g4P7WQubrOZ2ouiOCEQaxx5UfEEI="
    },
    {
      "id": 9,
      "category": "Under 49",
      "image": "https://tiimg.tistatic.com/fp/1/007/631/men-s-comfortable-breathable-cotton-polyester-nylon-elastane-ankle-length-shocks-139.jpg"
    },
    {
      "id": 10,
      "category": "Under 199",
      "image": "https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM="
    },
    {
      "id": 11,
      "category": "Under 499",
      "image": "https://rukminim2.flixcart.com/image/850/1250/xif0q/shoe/t/6/w/9-vs-9500-9-world-wear-footwear-white-original-imagn6a5fqbncryj.jpeg?q=90&crop=false"
    },
    {
      "id": 12,
      "category": "999",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5nqRBcCKuljLONW1Aj615uzWoGFvmTpRmA&s"
    }
];


function displayProducts(productList = products) {
    let productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    productList.forEach(product => {
        let div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <a href="${product.image}"><img src="${product.image}" alt="${product.name}" style="height: 180px; width: 180px;"></a>
            
            <p>${product.category}</p>
        `;

        const button = document.createElement("button");
        button.textContent = "See More";
        button.style.cursor = "pointer";
        button.style.color="blue";
        button.style.border="none";
        button.style.backgroundColor="#f1e7e7";
        button.addEventListener("click", function () {
            // seemore(product.id);
            window.location.href = product.category + ".html";
        });

        div.appendChild(button);

        productContainer.appendChild(div);
    });
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




displayProducts();