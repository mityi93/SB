
/*Выбор на мобильных устройствах */

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.nav_header__items');

sidebarToggleBtn.onclick = function () {
	menuIcon.classList.toggle('menu-icon-active');
	sidebar.classList.toggle('sidebar--mobile-active');
};

const slides = document.querySelectorAll('.slider_wrp-items'),
	item = document.querySelectorAll('.slider_wrp-items'),
	dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
	for (slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeItem = q => {
	for (items of item) {
		items.classList.remove('active');
	}
	item[q].classList.add('active');
}

const activeDot = n => {
	for (dot of dots) {
		// удаляет class active
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const CurrentSlide = ind => {
	activeItem(ind);

}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		activeItem(index);
		activeDot(index);
	})
})
