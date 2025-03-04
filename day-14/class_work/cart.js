// let cartData=JSON.parse(localStorage.getItem("DataCart"));

// console.log(cartData);

// function showData(data){
//         let box=document.createElement("div");
//         array.forEach((el, index) => {
//             let box=document.createElement('div');
//             box.className="parentBox"
      
//             box.style.border="1 px solid black";
//             box.style.width="300px";
//             box.style.margin="auto";
      
      
//             let h2=document.createElement("h2");
//             h2.innerText=el.name;
//             let p1=document.createElement('p');
//             p1.innerText=el.category;
      
//             let p2=document.createElement('p');
//             p2.innerText=el.price;
      
//             let p3=document.createElement('p');
//             p3.innerText=el.rating;
      
//             let img=document.createElement('img');
//             img.src=el.image;
//             img.style.height="100px";
//             img.style.width="100px"
      
//             let button=document.createElement('button');
//             button.innerText="delet"
//             button.addEventListener('click',()=>{
//               deletFun(el,index)
//             })
      
//             productBox.append(h2,img,p1,p2,p3,button);
//             document.getElementById("cart").append(productBox);
//     });
// }
// showData(cartData);

// function deletFun(){
//     console.log("Delet is working properly");
// }






let DataCart = JSON.parse(localStorage.getItem("DataCart"));


console.log(DataCart)

function showData(data){
    document.getElementById("products").innerHTML="";
    data.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let rating = document.createElement("p");
        rating.innerText = el.rating;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", ()=>{
            deleteFun(el, index);
        })
        productBox.append(heading, img, name, price, rating, button);
        document.getElementById("products").append(productBox);
    });
}
showData(DataCart)
function deleteFun(el, index){
    // console.log("delete function is called");
    let deletedCartData = JSON.parse(localStorage.getItem("DataCart")) || [];
    deletedCartData.splice(index, 1);
    console.log(deletedCartData)
    localStorage.setItem("DataCart", JSON.stringify(deletedCartData));
    showData(deletedCartData);
}