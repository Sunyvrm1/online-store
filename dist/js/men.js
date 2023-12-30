fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const men = data.filter((item) => item.category === "men's clothing");

    if (men) {
      const productContainer = document.querySelector(".productCont");

      men.forEach((product) => {
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
