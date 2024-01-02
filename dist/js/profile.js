fetch("https://fakestoreapi.com/users?limit=5")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.map((suny) => {
      const profileInit = suny.name.firstname.split(" ")[0].charAt(0);
      const profCircleCont = document.querySelector(".profCircleCont");
      const html = `<div id="${suny.id}" class="profileCircle"><p>${profileInit}</p></div>`;
      profCircleCont.insertAdjacentHTML("beforeend", html);
    });

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const house = document.getElementById("house");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const zipcode = document.getElementById("zipcode");

    const profileCircle1 = document.querySelectorAll(".profileCircle");
    profileCircle1[0].classList.add("active");
    profileCircle1.forEach((profile, i) => {
      profile.addEventListener("click", (event) => {
        const pro = event.currentTarget.getAttribute("id");
        profileCircle1.forEach((suny) => suny.classList.remove("active"));
        profileCircle1[i].classList.add("active");
        console.log(pro);
        const matchingId = data.find((suny) => suny.id === Number(pro));
        if (matchingId) {
          name.innerHTML = `${matchingId.name.firstname} ${matchingId.name.lastname}`;
          phone.innerHTML = matchingId.phone;
          email.innerHTML = matchingId.email;
          house.innerHTML = matchingId.address.number;
          street.innerHTML = matchingId.address.street;
          city.innerHTML = matchingId.address.city;
          zipcode.innerHTML = matchingId.address.zipcode;
        }
      });
    });
  });
