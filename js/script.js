let burger = document.getElementsByClassName("burger-menu");
let body = document.getElementById("body");
let menu = document.getElementById("menu");
for (let i = 0; i < burger.length; i++) {
	burger[i].onclick = function () {
		if (!menu.classList.contains("mobile-menu")) {
			burger[i].classList.add("active");
			menu.classList.add("mobile-menu");
			body.classList.add("lock");
		} else {
			burger[i].classList.remove("active");
			menu.classList.remove("mobile-menu");
			body.classList.remove("lock");
		}
	};
}
