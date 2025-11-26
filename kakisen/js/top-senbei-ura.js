const senbeis = document.querySelectorAll(".senbei");

senbeis.forEach((senbei) => {
    const backNum = senbei.getAttribute("data-back");
    const backImg = `../img/top-senbei-ura${backNum}.png`;
    const frontImg = `../img/top-senbei.png`;

    senbei.style.setProperty("--front-img", `url(${frontImg})`);
    senbei.style.setProperty("--back-img", `url(${backImg})`);  

  setInterval(() => {
    const shouldFlip = Math.random() < 0.5;
    if (shouldFlip) {
      senbei.classList.toggle("flip");
      setTimeout(() => {
        senbei.classList.remove("flip");
      }, 3000); 
    }
  }, 3000 + Math.random() * 3000);
});

function limitSenbeiForMobile() {
  if (window.innerWidth <= 768) {
    senbeis.forEach((senbei, index) => {
      senbei.style.display = index < 6 ? "block" : "none";
    });
  } else {
    senbeis.forEach((senbei) => {
      senbei.style.display = "block";
    });
  }
}

limitSenbeiForMobile();

window.addEventListener("resize", limitSenbeiForMobile);