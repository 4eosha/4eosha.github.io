// АККОРДИОН

const accordion = () => {
const buttons = document.querySelectorAll(".accordion__h2");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            this.classList.toggle("active-style");
            // Тогл следующего элемента
            this.nextElementSibling.classList.toggle("active-content");

            if (this.classList.contains("active-style")) {
                this.nextElementSibling.style.maxHeight =
                    // Увеличиваю высоту блока с текстом
                    this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });
};

accordion();