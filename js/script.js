let burger = document.getElementsByClassName("burger-menu");
let body = document.getElementById("body");
let menu = document.getElementById("menu");
let slider_track = document.querySelector(".slider-track");
for (let i = 0; i < burger.length; i++) {
	burger[i].onclick = function () {
		if (!menu.classList.contains("mobile-menu")) {
			slider_track.style.display = "none";
			burger[i].classList.add("active");
			menu.classList.add("mobile-menu");
			body.classList.add("lock");
		} else {
			burger[i].classList.remove("active");
			menu.classList.remove("mobile-menu");
			body.classList.remove("lock");
			slider_track.style.display = "flex";
		}
	};
}
