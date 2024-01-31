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
        "afterbegin",
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
    const cart = document.querySelectorAll(".cart");
    const bagProduct = document.querySelector(".bagProduct");
    bagProduct.textContent = cart.length;
    const originalPrices = Array.from(price).map((p) => Number(p.textContent));
    console.log(originalPrices);

    increase.forEach((inc, i) => {
      inc.addEventListener("click", () => {
        let num = Number(quantity[i].innerHTML);
        num++;
        quantity[i].innerHTML = num;
        price[i].textContent = (originalPrices[i] * num).toFixed(2);
      });
    });
    decrease.forEach((dec, i) => {
      dec.addEventListener("click", () => {
        let num = Number(quantity[i].innerHTML);
        if (num > 1) {
          num--;
          quantity[i].textContent = num;
          price[i].textContent = (originalPrices[i] * num).toFixed(2);
        }
      });
    });

    const deleteItem = document.querySelectorAll(".delete");
    deleteItem.forEach((del, i) => {
      del.addEventListener("click", () => {
        const delId =
          del.parentElement.previousElementSibling.firstElementChild.getAttribute(
            "alt"
          );
        cart[i].classList.add("vanishItem");
        removeFromLocalStorage1(delId);
        console.log(delId);
        bagProduct.textContent = cart.length;
      });
    });
  });

function removeFromLocalStorage1(itemId) {
  const existingData = JSON.parse(localStorage.getItem("btnClick1"));
  const updatedData = existingData.filter((id) => id !== itemId);
  localStorage.setItem("btnClick1", JSON.stringify(updatedData));
}
