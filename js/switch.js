const switcher = document.querySelector(".checkbox");
const switch_individual = document.querySelector("#switch-individual");
const switch_company = document.querySelector("#switch-company");
const plan_card_individual = document.querySelector(".plan-card-individual");
const plan_card_company = document.querySelector(".plan-card-company");
switcher.onclick = function () {
	if (switcher.checked) {
		switch_company.style.color = "black";
		switch_company.style.fontWeight = "bold";
		switch_individual.style.color = "#a1a2a4";
		switch_individual.style.fontWeight = "normal";

		plan_card_company.style.zIndex = "2";
		plan_card_company.style.backgroundColor = "white";
		plan_card_individual.style.backgroundColor = "#ebebed";
	} else {
		switch_company.style.color = "#a1a2a4";
		switch_company.style.fontWeight = "normal";
		switch_individual.style.color = "black";
		switch_individual.style.fontWeight = "bold";

		plan_card_company.style.zIndex = "0";
		plan_card_individual.style.backgroundColor = "white";
		plan_card_company.style.backgroundColor = "#ebebed";
	}
};
