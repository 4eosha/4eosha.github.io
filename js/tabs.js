// ТАБЫ

// Получаю табы, хэдер таба и их контент
let tab = document.querySelectorAll(".tab__tab"),
info = document.querySelector(".tab__header"),
tabContent = document.querySelectorAll(".tab__tab-content");

// Скрывает неоткрытые табы
function hideTabContent(a) {
for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
}
}

// Всё кроме 1
hideTabContent(1);

// Показывание только нужного таба
function ShowTabContent(b) {
if (tabContent[b].classList.contains("hide")) {
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
}
}

// Создаем событие клика на родителя, используя делегирование событий
info.addEventListener("click", function (event) {
    let target = event.target;

    if (target && target.classList.contains("tab__tab")) {
        // Связь элементов при совпадении target
        for (let i = 0; i < tab.length; i++) {
            // если совпадают
            if (target == tab[i]) {
                // Скрываем все табы
                hideTabContent(0);
                // удаляем класс активности таба
                tab.forEach((item) => {
                    item.classList.remove("active_t");
                });
                // элементу target(на который кликнули) добавляем активный класс
                target.classList.add("active_t");

                // Совпадение по нумерации
                ShowTabContent(i);

                break;
            }
        }
    }
});