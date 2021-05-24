function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//Menu burger=======================================================================
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');
headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
})

//Popup=======================================================================
let popup = document.querySelector('.popup');
let popupTransition = setTimeout(func, 1000);

function func() {
	popup.classList.add('popup-active');
}

document.addEventListener('click', function (event) {
	let its_popup = document.querySelector('.popup__button');

	if ((event.target != its_popup)) {
		popup.classList.remove('popup-active');
	}
});

//Animation=======================================================================

let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	console.log(animItems.length);
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				animItem.classList.remove('active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect();
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}