const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");
const counter = document.querySelectorAll(".counter");

minusBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const num = counter[index];
        let current = Number(num.textContent);
        if (current > 1) {
            num.textContent = current - 1;
        }
    });
});

plusBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const num = counter[index];
        let current = Number(num.textContent);
        num.textContent = current + 1;
    });
});