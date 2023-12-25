fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
