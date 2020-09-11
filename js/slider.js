let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", function () {
	const itemsLeft =
		itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	position -=
		itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtns();
});

btnPrev.addEventListener("click", function () {
	const itemsLeft = Math.abs(position) / itemWidth;
	position +=
		itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtns();
});

function setPosition() {
	track.style.transform = `translateX(${position}px)`;
}

function checkBtns() {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();
