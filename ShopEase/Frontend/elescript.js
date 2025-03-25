const products = [
    {
      "id": 1,
      "name": "Prienter",
      "category": "Electronics",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://5.imimg.com/data5/SELLER/Default/2021/3/PA/ZQ/LT/121439134/epson-colore-printer-inkjet.jpg"
    },
    {
      "id": 2,
      "name": "Router",
      "category": "Electronics",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://media.istockphoto.com/id/495732397/photo/black-wi-fi-router.jpg?s=612x612&w=0&k=20&c=KX1g5e0Fx48GZ_jIpSuUP1_jPkp6eAiJYFj2GYCzQoc="
    },
    {
      "id": 3,
      "name": "Fridge",
      "category": "Electronics",
      "price": 21000.00,
      "rating": 4.8,
      "image": "https://images-cdn.ubuy.co.in/65979c2cb910f53d2e6e34ae-3-5cu-ft-compact-refrigerator-mini.jpg"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Electronics",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg"
    },
    {
      "id": 5,
      "name": "Computer",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://png.pngtree.com/png-clipart/20211231/ourmid/pngtree-cartoon-hand-drawn-electronic-products-computer-png-image_4077585.png"
    },
    {
      "id": 6,
      "name": "Fan",
      "category": "Electronics",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://images-cdn.ubuy.co.in/64d7ea8fcd6cea30954c8590-beyond-breeze-oscillating-table-fan.jpg"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://cdn.cinemacenter.in/image/cache/catalog/images/0021038_sony-zv-1-digital-camera_500-500x500.jpeg.webp"
    },
    {
      "id": 8,
      "name": "Speaker",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw76ed786e/JBL_PARTYBOX_110_3_4_RIGHT_WATER_2243_x3.png?sw=535&sh=535"
    },
    {
      "id": 9,
      "name": "Power Bank",
      "category": "Electronics",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://rukminim2.flixcart.com/image/850/1000/johi3680/power-bank/6/h/n/battery-pack-eb-p1100bpngin-samsung-original-imafawtybtc9zhvf.jpeg?q=90&crop=false"
    },
    {
      "id": 10,
      "name": "Telivision",
      "category": "Electronics",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://static.digit.in/product/62fbd1bbab2478964564641957db61ce84794b94.jpeg"
    },
    {
      "id": 11,
      "name": "Mobile",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone.jpg"
    },
    {
      "id": 12,
      "name": "Air Conditionar",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://shoptopus.in/images/products/a780415205c43ea3e10df1ce43aad5f5.jpg"
    },
    {
      "id": 13,
      "name": "Guiter",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57v_lJNyA7XdKWiPUHt6bAzMu5ulfM6cJXQ&s"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Electronics",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://m.media-amazon.com/images/I/51yBOvORkPL.jpg"
    },
    {
      "id": 15,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd3CcNlyz7VcYXI76DnDqd8VFFZVosP2X-R_bT67iN2OrtS5uQPjju96dTtF_FOhaotYqYSkoCOgS5SqTLrd0CISCtvyMZ2dViDe6cAY7ESGZbpW70As2WKDE"
    },
    {
      "id": 16,
      "name": "Washing Mechine",
      "category": "Electronics",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://www.hindustantimes.com/ht-img/img/2024/11/26/550x309/best_washing_machine_with_inbuilt_heater_1732623273602_1732623293918.jpg"
    },
    {
      "id": 17,
      "name": "Electric Kettle",
      "category": "Electronics",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://m.media-amazon.com/images/I/51Q11RNy8dL._AC_UF894,1000_QL80_.jpg"
    },
    {
      "id": 18,
      "name": "Router",
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdeYUxNZtGDEGOk6UWww1m60ZKYwb9UcLbe-6Wc4sq6a5rMK5es6xPtksq6Eb2KrsxFJk9vI-2BQyW4QPOyGXaG6bZ-wXZjfqKhiMJVRGCmOKoXzzwQHslBQ"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://m.media-amazon.com/images/I/61oIAKY9s1L.jpg"
    },
    {
      "id": 20,
      "name": "Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQI2yaBrsOhg60x5FPzVUiINeZVKQdCQn58PkSVcFW-htMNxKHmDlWa2sHDc814ubs5q8zKmxyxZDaJv9EfY2zUeIZTfe2NLXxmpz3xKDLa3oUoybYwyZbD"
    },
    {
        "id": 21,
        "name": "AC Motor",
        "category": "Electronics",
        "price": 49.99,
        "rating": 4.5,
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ac-elektromotor-robuster-asynchronmotor.jpg"
    },
    {
        "id": 22,
        "name": "Laptop",
        "category": "Electronics",
        "price": 49.99,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 23,
        "name": "UPS",
        "category": "Electronics",
        "price": 49.99,
        "rating": 4.5,
        "image": "https://m.media-amazon.com/images/I/71+39kie5SL.jpg"
    },
    {
        "id": 24,
        "name": "Projector",
        "category": "Electronics",
        "price": 49.99,
        "rating": 4.5,
        "image": "https://projectorservicecenter.com/wp-content/uploads/2020/10/Perfect-Picture-On-Projector-2.jpg"
    }
];


function displayProducts(productList = products) {
    let productContainer = document.getElementById("products");
    productContainer.innerHTML = "";
    productList.forEach(product => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <a href="${product.image}"><img src="${product.image}" alt="${product.name}" style="height: 100px; width: 120px;"></a>
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <p>${product.category} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${product.rating}</p>
            
            <button onclick="productDetails(${product.id})">Buy Now</button>
            <button onclick="addcart(${product.id})">Add To Cart</button>
        `;
        productContainer.appendChild(div);
    });
}
//<button onclick="addToCart(${product.id})">Add to Cart</button>

function productDetails() {
    window.location.href = "productDetails.html";
}

function addcart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function goToCart() {
    window.location.href = "cart.html";
}

function updateProducts() {
    let sortValue = document.getElementById("sort").value;
    let filterValue = document.getElementById("filter").value;
    let filteredProducts = products;
    
    if (filterValue !== "all") {
        filteredProducts = products.filter(product => product.category === filterValue);
    }
    
    if (sortValue === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    displayProducts(filteredProducts);
}

function searchProducts() {
    let query = document.getElementById("search").value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

displayProducts();