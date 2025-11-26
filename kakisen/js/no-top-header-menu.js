const menuBtn = document.getElementById("menu-btn"); 
const navOverlay = document.getElementById("global-nav");
const patternBg = document.getElementById("pattern-bg");
const menuClose = document.getElementById("menu-close");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navOverlay.classList.toggle("active");
    if (!navOverlay.classList.contains("active")) {
        patternBg.style.opacity = 0;
    }
});

document.querySelectorAll(".nav-content li").forEach(item => {
    item.addEventListener("mouseenter", () => {
    const pattern = item.getAttribute("data-pattern");
    patternBg.style.backgroundImage = `url('../img/${pattern}.png')`;
    patternBg.style.opacity = 1;
    });
    item.addEventListener("mouseleave", () => {
        patternBg.style.opacity = 0;
    });
});

menuClose.addEventListener("click", () => {
    navOverlay.classList.remove("active");
    menuBtn.classList.remove("active");
    patternBg.style.opacity = 0;
});

const shopBtn = document.querySelector(".fixed-shop-btn");

menuBtn.addEventListener("click", () => {
    if (navOverlay.classList.contains("active")) {
    shopBtn.style.display = "none";
    } else {
    shopBtn.style.display = "flex";
    }
});

menuClose.addEventListener("click", () => {
    shopBtn.style.display = "flex";
});