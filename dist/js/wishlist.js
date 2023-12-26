const storeId1 = localStorage.getItem("btnClick");
console.log(storeId1);

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     const matchingId = data.find((item) => item.id.toString() === storeId1);
//     if (matchingId) {
//       data.map((item) => {
//         console.log(item.id);
//       });
//       //   console.log(matchingId);
//       //   const title = document.getElementById("title");
//       //   const category = document.getElementById("category");
//       //   const rate = document.getElementById("rate");
//       //   const count = document.getElementById("count");
//       //   const price = document.getElementById("price");
//       //   const productOverview = document.getElementById("productOverview");
//       //   const productImage = document.getElementById("productImage");

//       //   title.innerHTML = matchingId.title;
//       //   category.innerHTML = matchingId.category;
//       //   rate.innerHTML = matchingId.rating.rate;
//       //   count.innerHTML = matchingId.rating.count;
//       //   price.innerHTML = matchingId.price;
//       //   productOverview.innerHTML = matchingId.description;
//       //   productImage.src = matchingId.image;
//       //   productImage.setAttribute("alt", matchingId.id);
//     }
//   });

// Fetch data or use a hardcoded array for demonstration
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const matchingId = data.find((item) => item.id.toString() === storeId1);
    if (matchingId) {
      // Create elements and populate data
      const wishlistItem = document.createElement("div");
      wishlistItem.classList.add("wishlist");

      const productContainer = document.createElement("div");
      productContainer.classList.add("product");

      const productImage = document.createElement("img");
      productImage.src = matchingId.image; // Assuming the image URL is in the 'image' property
      productImage.alt = matchingId.title; // Assuming the title is in the 'title' property

      const productInfo = document.createElement("div");
      productInfo.classList.add("productInfo");

      const productTitle = document.createElement("p");
      productTitle.classList.add("productTitle");
      productTitle.textContent = matchingId.title; // Assuming the title is in the 'title' property

      const productPrice = document.createElement("p");
      productPrice.classList.add("productPrice");
      productPrice.textContent = `$ ${matchingId.price}`; // Assuming the price is in the 'price' property

      const actionButton = document.createElement("div");
      actionButton.classList.add("actionButton");

      const moveButton = document.createElement("button");
      moveButton.textContent = "MOVE TO BAG";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      // Construct the elements hierarchy
      productInfo.appendChild(productTitle);
      productInfo.appendChild(productPrice);

      productContainer.appendChild(productImage);
      productContainer.appendChild(productInfo);

      actionButton.appendChild(moveButton);
      actionButton.appendChild(deleteButton);

      wishlistItem.appendChild(productContainer);
      wishlistItem.appendChild(actionButton);

      // Append the constructed item to an existing container (assuming its class is 'container')
      const container = document.querySelector(".container");
      container.appendChild(wishlistItem);
    }
  });
