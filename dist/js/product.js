const storeId = localStorage.getItem("clickedId");
console.log(storeId);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const matchingId = data.find((item) => item.id.toString() === storeId);
    if (matchingId) {
      console.log(matchingId);
      const title = document.getElementById("title");
      const category = document.getElementById("category");
      const rate = document.getElementById("rate");
      const count = document.getElementById("count");
      const price = document.getElementById("price");
      const productOverview = document.getElementById("productOverview");
      const productImage = document.getElementById("productImage");

      title.innerHTML = matchingId.title;
      category.innerHTML = matchingId.category;
      rate.innerHTML = matchingId.rating.rate;
      count.innerHTML = matchingId.rating.count;
      price.innerHTML = matchingId.price;
      productOverview.innerHTML = matchingId.description;
      productImage.src = matchingId.image;
      productImage.setAttribute("alt", matchingId.id);
    }
  });

const addToWishlist = document.getElementById("addToWishlist");
const iconColor = document.getElementById("iconColor");
let newArr = [];

addToWishlist.addEventListener("click", () => {
  const btnClick =
    addToWishlist.parentElement.parentElement.previousElementSibling.getAttribute(
      "alt"
    );
  iconColor.classList.toggle("iconColorActive");

  newArr.push(btnClick);
  localStorage.setItem("btnClick", JSON.stringify(newArr));
  console.log("Updated newArr:", newArr);
});

const existingData = localStorage.getItem("btnClick");
console.log("Existing Data from localStorage:", existingData);

if (existingData) {
  newArr = JSON.parse(existingData);
  console.log("Parsed newArr from localStorage:", newArr);
}
