const storeId1 = JSON.parse(localStorage.getItem("btnClick1"));
console.log(storeId1);

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
    const decrease = document.querySelectorAll(".dec");
    const increase = document.querySelectorAll(".inc");
    const price = document.querySelectorAll(".cartPrice .price");
    const quantity = document.querySelectorAll(".quantity");
    let number = 1;
    let initialPrice = Number(price.textContent);
    console.log(initialPrice);
    increase.forEach((inc, i) => {
      inc.addEventListener("click", () => {
        number++;
        quantity[i].innerHTML = number;
        price[i].textContent = initialPrice[i] * number;
      });
    });
    decrease.forEach((dec, i) => {
      dec.addEventListener("click", () => {
        if (number > 1) {
          number--;
          quantity[i].textContent = number;
          price[i].textContent = initialPrice[i] * number;
        }
      });
    });
  });
