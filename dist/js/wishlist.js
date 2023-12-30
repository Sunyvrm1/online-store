const storeId1 = localStorage.getItem("btnClick");
console.log(storeId1);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const matchingId = data.find((item) => item.id.toString() === storeId1);
    if (matchingId) {
      console.log(matchingId);
      const productTitle = document.querySelector(".productTitle");
      const productPrice = document.querySelector(".productPrice");
      const productImg = document.getElementById("productImg");

      productTitle.innerHTML = matchingId.title;
      productPrice.innerHTML = `$ ${matchingId.price}`;
      productImg.src = matchingId.image;
    }
  });

const wishlist = document.querySelector(".wishlist");
const deleteItem = document.getElementById("delete");

deleteItem.addEventListener("click", () => {
  wishlist.classList.add("vanishItem");
});
