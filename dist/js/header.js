fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data;

    const scriptTags = document
      .querySelector("header")
      .getElementsByTagName("script");
    for (let i = 0; i < scriptTags.length; i++) {
      const script = document.createElement("script");
      script.textContent = scriptTags[i].textContent;
      document.body.appendChild(script).parentNode.removeChild(script);
    }
  });
