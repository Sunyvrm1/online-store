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

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Slicing data for different categories
    const menArray = data.slice(0, 4);
    const womenArray = data.slice(15, 19);
    const elecArray = data.slice(8, 12);
    const jewelArray = data.slice(4, 8);

    // Target elements for different categories
    const categoryImages = [
      document.querySelector(".categoryImage1"),
      document.querySelector(".categoryImage2"),
      document.querySelector(".categoryImage3"),
      document.querySelector(".categoryImage4"),
    ];

    // Populating images for each category
    displayCategoryImages(menArray, categoryImages[0]);
    displayCategoryImages(womenArray, categoryImages[1]);
    displayCategoryImages(elecArray, categoryImages[2]);
    displayCategoryImages(jewelArray, categoryImages[3]);

    const imagesAll = document.querySelectorAll(".categoryImage img");
    imagesAll.forEach((img) => {
      img.addEventListener("click", imageClick);
    });
  });

//--------------------- display data ---------------------

function displayCategoryImages(categoryArray, targetElement) {
  categoryArray.forEach((item) => {
    const html = `<img src="${item.image}" alt="${item.id}" />`;
    targetElement.insertAdjacentHTML("afterbegin", html);
  });
}

//--------------------- Images click event ---------------------

function imageClick(event) {
  const clickedId = event.target.getAttribute("alt");
  //   console.log("Clicked ID:", clickedId);
  localStorage.setItem("clickedId", clickedId);
  window.location.href = "product.html";
}
