//Создание бургер меню
	//получаем иконку бургер меню
	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#pop-up");
	const menu = document.querySelector("#menu").cloneNode(1);
    var lines = document.querySelectorAll(".line");
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler() {
        for (var i = 0; i < lines.length; i++) {
            lines[i].classList.toggle('open_l');
        }
        // line.classList.toggle('open_l');
        hamb.classList.toggle('open_h');
		popup.classList.toggle('open');
		renderPopup();
	}
	function renderPopup() {
		popup.appendChild(menu);
	}