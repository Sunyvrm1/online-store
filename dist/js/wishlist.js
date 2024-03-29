const storeId1 = JSON.parse(localStorage.getItem("btnClick"));
console.log(storeId1);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const matchingProducts = data.filter((item) =>
      storeId1.includes(item.id.toString())
    );
    const wishlistContainer = document.querySelector(".wishlistContainer");
    matchingProducts.forEach((products) => {
      wishlistContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="wishlist">
          <div class="product">
            <img src="${products.image}" alt="${products.id}" id="productImg" />
            <div class="productInfo">
              <p class="productTitle">${products.title}</p>
              <p class="productPrice">$${products.price}</p>
            </div>
          </div>
          <div class="actionButton">
            <button id="moveToBag">MOVE TO BAG</button>
            <button id="delete" class="deleteProd"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>`
      );
    });
    console.log(matchingProducts);

    const deleteItem = document.querySelectorAll(".deleteProd");
    const wishlist = document.querySelectorAll(".wishlist");
    deleteItem.forEach((del, i) => {
      del.addEventListener("click", () => {
        const delId =
          del.parentElement.previousElementSibling.firstElementChild.getAttribute(
            "alt"
          );
        wishlist[i].classList.add("vanishItem");
        removeFromLocalStorage(delId);
        console.log(delId);
      });
    });
  });
function removeFromLocalStorage(itemId) {
  const existingData = JSON.parse(localStorage.getItem("btnClick"));
  console.log(existingData);
  const updatedData = existingData.filter((id) => id !== itemId);
  console.log(updatedData);
  localStorage.setItem("btnClick", JSON.stringify(updatedData));
}
