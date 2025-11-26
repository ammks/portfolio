// const target = document.getElementById("target");

// window.addEventListener("scroll", () => {
//     const y = window.scrollY;

//     if (y >= 300 && y <= 600) {
//         target.classList.add("fixed");
//     } else {
//         target.classList.remove("fixed");
//     }
// });

const area = document.querySelector(".target-area");
const box = documunt.querySelector(".box");

const start = area.offsetHeight;

window.addEventListener("scroll", () => {
    const y = window.scrollY;

    if (y < start) {
        box.classList.remove("fixed", "stopped");
        box.style.top = "0px";
    } else if (y > start && y <= end) {
        box.classList.add("fixed");
        box.classList.remove("stopped");
    } else {
        box.classList.remove("fixed");
        box.classList.add("stopped");
        box.style.top = (end - start) + "px";
    }
});