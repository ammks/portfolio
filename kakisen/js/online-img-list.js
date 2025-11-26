const displayImgs = document.querySelectorAll(".img-list .item");
const btnImgs = document.querySelectorAll(".img-btn-list .item");

btnImgs.forEach((btnImg, i) => {
    btnImg.addEventListener("click", () => {
        displayImgs.forEach((displayImg, index) => {
            if (index == i) {
                displayImg.classList.add(`active`);
            } else {
                displayImg.classList.remove(`active`);
            }
        });
    });
});