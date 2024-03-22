//slider banner function

const slider = document.querySelector(".posterScroller");
const slides = document.querySelectorAll(".poster");
const intervalTime = 3000; // Set time interval in milliseconds
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(${-slideIndex * 100}%)`;
  slides.forEach((slide, index) => {
    index === slideIndex
      ? slide.classList.add("active")
      : slide.classList.remove("active");
  });
}

setInterval(nextSlide, intervalTime);

// -------------------------fetch--------------------------

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     //for men categoory

//     const menArray = data.slice(0, 4);

//     menArray.map((men) => {
//       const categoryImage1 = document.querySelector(".categoryImage1");
//       const html = `<img src="${men.image}" alt="${men.id}" />`;
//       categoryImage1.insertAdjacentHTML("afterbegin", html);
//     });

//     //for Women categoory

//     const womenArray = data.slice(15, 19);

//     womenArray.map((women) => {
//       const categoryImage1 = document.querySelector(".categoryImage2");
//       const html = `<img src="${women.image}" alt="${women.id}" />`;
//       categoryImage1.insertAdjacentHTML("afterbegin", html);
//     });

//     //for electronic categoory

//     const elecArray = data.slice(8, 12);

//     elecArray.map((elec) => {
//       const categoryImage1 = document.querySelector(".categoryImage3");
//       const html = `<img src="${elec.image}" alt="${elec.id}" />`;
//       categoryImage1.insertAdjacentHTML("afterbegin", html);
//     });

//     //for jewellery categoory

//     const jewelArray = data.slice(4, 8);

//     jewelArray.map((jewel) => {
//       const categoryImage1 = document.querySelector(".categoryImage4");
//       const html = `<img src="${jewel.image}" alt="${jewel.id}" />`;
//       categoryImage1.insertAdjacentHTML("afterbegin", html);
//     });
//   });

// snfusdbfhbdshbfhbgsdgdfhg dfgyd fyhdkhafjdh lasfsh dfask

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     // Slicing data for different categories
//     const menArray = data.slice(0, 4);
//     const womenArray = data.slice(15, 19);
//     const elecArray = data.slice(8, 12);
//     const jewelArray = data.slice(4, 8);

//     // Target elements for different categories
//     const categoryImages = [
//       document.querySelector(".categoryImage1"),
//       document.querySelector(".categoryImage2"),
//       document.querySelector(".categoryImage3"),
//       document.querySelector(".categoryImage4"),
//     ];

//     // Populating images for each category
//     displayCategoryImages(menArray, categoryImages[0]);
//     displayCategoryImages(womenArray, categoryImages[1]);
//     displayCategoryImages(elecArray, categoryImages[2]);
//     displayCategoryImages(jewelArray, categoryImages[3]);

//     const imagesAll = document.querySelectorAll(".categoryImage img");
//     imagesAll.forEach((img) => {
//       img.addEventListener("click", imageClick);
//     });
//   });

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.map((prod) => {
      const productCont = document.querySelector(".productCont");
      productCont.insertAdjacentHTML(
        "beforeend",
        `<div class="product">
    <div class="productImg">
      <img src="${prod.image}" alt="${prod.id}" />
        <div class="prodAction">
            <button class="prodActionBtn"><i class="fa-solid fa-cart-shopping"></i></button>
            <button class="prodActionBtn"><i class="fa-solid fa-heart"></i></button>
            <button class="prodActionBtn productOverview" id="${prod.id}"><i class="fa-solid fa-eye" id="${prod.id}"></i></button>
        </div>
    </div>
    <p class="productTitle">${prod.title}</p>
    <p class="productPrice">$ ${prod.price}</p>
  </div>`
      );

      const imagesAll = document.querySelectorAll(".productImg img");
      imagesAll.forEach((img) => {
        img.addEventListener("click", imageClick);
      });
    });
    const productOverview = document.querySelectorAll(".productOverview");
      productOverview.forEach((prod) => {
        prod.addEventListener("click", (e) => {
          const quickView = document.querySelector(".quickView");
          quickView.classList.remove("opacityHalf");
          document.querySelector("body").style.overflow = "hidden";
          const quickViewId =  e.target.id;
          const quickViewMatchId = data.find((suny) => suny.id.toString() === quickViewId);
          console.log(quickViewMatchId);
          if(quickViewMatchId){
            const quickViewProdImage = document.querySelector(".quickViewProdImage");
            const quickViewProdTitle = document.querySelector(".quickViewProdTitle");
            const quickViewProdCat = document.querySelector(".quickViewProdCat");
            const quickViewProdDes = document.querySelector(".quickViewProdDes");
            const quickViewProdPice = document.querySelector(".quickViewProdPice");

            quickViewProdImage.src = quickViewMatchId.image;
            quickViewProdTitle.textContent = quickViewMatchId.title;
            quickViewProdCat.textContent = quickViewMatchId.category;
            quickViewProdDes.textContent = quickViewMatchId.description;
            quickViewProdPice.textContent = "$" + quickViewMatchId.price;
          }
        })
      })

      const close = document.querySelector(".close");
      close.addEventListener("click", () => {
        const quickView = document.querySelector(".quickView");
        quickView.classList.add("opacityHalf");
        document.querySelector("body").style.overflow = "scroll";
      })
  });

//--------------------- display data ---------------------

// function displayCategoryImages(categoryArray, targetElement) {
//   categoryArray.forEach((item) => {
//     const html = `<img src="${item.image}" alt="${item.id}" />`;
//     targetElement.insertAdjacentHTML("afterbegin", html);
//   });
// }

//--------------------- Images click event ---------------------

function imageClick(event) {
  const clickedId = event.target.getAttribute("alt");
  localStorage.setItem("clickedId", clickedId);
  window.location.href = "product.html";
}
