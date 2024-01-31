const storeId1 = JSON.parse(localStorage.getItem("btnClick1"));
console.log(storeId1);

const dec = document.querySelectorAll(".dec");
const inc = document.querySelectorAll(".inc");
const price = document.querySelectorAll(".cartPrice .price");
const quantity = document.querySelectorAll(".quantity");
let number = 1;
let initialPrice = Number(price.textContent);
inc.forEach((inc) => {
    inc.addEventListener("click", () => {
      number++;
      quantity[i].innerHTML = number;
      price[i].textContent = initialPrice[i] * number;
    });
})
dec.forEach((dec) => {
    dec.addEventListener("click", () => {
      if (number > 1) {
        number--;
        quantity.textContent = number;
        price.innerHTML = initialPrice * number;
      }
    });
})

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const matchingProducts = data.filter((item) =>
      storeId1.includes(item.id.toString())
    );
    const cartProduct = document.querySelector(".cartProduct");
    matchingProducts.forEach((products) => {
      cartProduct.insertAdjacentHTML(
        "beforeend",
        `<div class="cart">
        <div class="cartImgNTitle">
          <img
            src="${products.image}"
            alt="${products.id}"
          />
          <div class="cartDetails">
            <p class="cartTitle">${products.title}</p>
            <p class="cartPrice">$<span class="price">${products.price}</span></p>
          </div>
        </div>
        <div class="deleteItem">
          <div class="cartQuantity">
            <button class="dec"><i class="fa-solid fa-minus"></i></button>
            <p class="quantity">1</p>
            <button class="inc"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div class="delete">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>`
      );
    });
  });
