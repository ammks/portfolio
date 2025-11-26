document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const requiredInputs = form.querySelectorAll("input[required]");
    const errorMsg = document.querySelector(".error-msg");

    errorMsg.style.display = "none";

    form.addEventListener("submit", (e) => {
        let isValid = true;

        requiredInputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
            errorMsg.style.display = "block";
            window.scrollTo({
                top: errorMsg.offsetTop - 100,
                behavior: "smooth"
            });
        } else {
            errorMsg.style.display = "none";
        }
    });
});

