// МОДАЛЬНОЕ ОКНО

const cookies = document.getElementById("cookies");
const cookiesButton = document.getElementById("cookies__button");

// Убираю, при нажатии на "Хорошо"
cookiesButton.addEventListener("click", function () {
    cookies.style.display = "none";
});