// const buttons = document.querySelectorAll(".accordion__label");
// buttons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		button.classList.toggle("accordion__label--active");
// 		const accordion = button.nextElementSibling;

// 		if (button.classList.contains("accordion__label--active")) {
// 			const accrodions = document.querySelectorAll(".accordion__content-text");
// 			accrodions.forEach((item) => {
// 				item.style.display = "none";
// 				item.style.maxHeight = "0";
// 			});

// 			accordion.style.maxHeight = accordion.clientHeight + "px";
// 			accordion.style.display = "block";
// 			console.log(accordion.clientHeight);
// 		} else {
// 			button.classList.remove("accordion__label--active");
// 			accordion.style.maxHeight = "0px";
// 			accordion.style.display = "none";
// 		}
// 	});
// });

$(document).ready(function () {
	//toggle the component with class accordion_body
	$(".accordion__label").click(function () {
		if ($(".accordion__content-text").is(":visible")) {
			$(".accordion__content-text").slideUp(500);
			$(".plusminus").text("+");
			$(".accordion__label").removeClass("active");
		}
		if ($(this).next(".accordion__content-text").is(":visible")) {
			$(this).next(".accordion__content-text").slideUp(500);
			$(this).children(".plusminus").text("+");
			$(this).removeClass("active");
		} else {
			$(this).next(".accordion__content-text").slideDown(500);
			$(this).children(".plusminus").text("-");
			$(this).addClass("active");
		}
	});
});

// Accordion two -------------------
$(document).ready(function () {
	//toggle the component with class accordion_body
	$(".accordion__label-two").click(function () {
		if ($(".accordion__content-text-two").is(":visible")) {
			$(".accordion__content-text-two").slideUp(500);
			$(".plusminus").text("+");
			$(".accordion__label-two").removeClass("active");
		}
		if ($(this).next(".accordion__content-text-two").is(":visible")) {
			$(this).next(".accordion__content-text-two").slideUp(500);
			$(this).children(".plusminus").text("+");
			$(this).removeClass("active");
		} else {
			$(this).next(".accordion__content-text-two").slideDown(500);
			$(this).children(".plusminus").text("-");
			$(this).addClass("active");
		}
	});
});

// FAQ section-------------------------
$(document).ready(function () {
	//toggle the component with class accordion_body
	$(".accordion__label-faq").click(function () {
		if ($(".accordion__content-text-faq").is(":visible")) {
			$(".accordion__content-text-faq").slideUp(500);
			$(".plusminus").text("+");
			$(".accordion__label-faq").removeClass("active");
		}
		if ($(this).next(".accordion__content-text-faq").is(":visible")) {
			$(this).next(".accordion__content-text-faq").slideUp(500);
			$(this).children(".plusminus").text("+");
			$(this).removeClass("active");
		} else {
			$(this).next(".accordion__content-text-faq").slideDown(500);
			$(this).children(".plusminus").text("-");
			$(this).addClass("active");
		}
	});
});

// Tool-tips----------------

const toolTips = document.querySelector(
	".trail__click-img, .trail__click-img--two"
);
const toolTipsTwo = document.querySelector(".trail__click-img--two");
const toolTipBox = document.querySelector(".trail__tooltip");
const toolTipBoxTwo = document.querySelector(".trail__tooltip--two");

// toolTips.forEach(item=> item.)
toolTips.onclick = function () {
	if (toolTipBox.style.display != "block") {
		toolTipBox.style.display = "block";
	} else {
		toolTipBox.style.display = "none";
	}
};

toolTipsTwo.onclick = function () {
	if (toolTipBoxTwo.style.display != "block") {
		toolTipBoxTwo.style.display = "block";
	} else {
		toolTipBoxTwo.style.display = "none";
	}
};
