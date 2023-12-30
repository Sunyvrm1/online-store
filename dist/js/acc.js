fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const elec = data.filter((item) => item.category === "electronics");

    if (elec) {
      const productContainer = document.querySelector(".productCont");

      elec.forEach((product) => {
        const html = `<div class="product">
                <img src="${product.image}" alt="${product.id}" />
                <p class="productTitle">${product.title}</p>
              </div>`;
        productContainer.insertAdjacentHTML("afterbegin", html);
      });
      const imagesAll = document.querySelectorAll(".product img");
      imagesAll.forEach((img) => {
        img.addEventListener("click", (event) => {
          const clickedId = event.target.getAttribute("alt");
          localStorage.setItem("clickedId", clickedId);
          window.location.href = "product.html";
        });
      });
    }
  });
