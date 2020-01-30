class Slider {
	constructor(id, activeSlide, slideWidth) {
		const sliderRoot = document.getElementById(id);
		// инициализируем нужные переменные
		this.activeSlide = activeSlide;
		this.slideWidth = slideWidth;
		this.slideList = sliderRoot.firstElementChild.children;
		this.slideCount = this.slideList.length - 1;
		this.btnLeft = sliderRoot.lastElementChild;
		this.btnRight = sliderRoot.lastElementChild.previousElementSibling;
		
		//делаем активный слайд по умолчанию
		this.makeActiveSlide(this.activeSlide);
		//назначаем события
		this.btnRight.addEventListener('click', e => {
			this.toRight();
		});
		this.btnLeft.addEventListener('click', e => {
			this.toLeft();
		});
	}

	toRight() {
		if (this.activeSlide === this.slideCount) this.activeSlide = 0;
		else this.activeSlide += 1;

		this.makeActiveSlide(this.activeSlide);
	}

	toLeft() {
		if (this.activeSlide === 0) this.activeSlide = this.slideCount;
		else this.activeSlide -= 1;

		this.makeActiveSlide(this.activeSlide);
	}

	makeActiveSlide(numberSlide) {
		let pixel = numberSlide * this.slideWidth + 'px';
		for(let i = 0; i < this.slideCount + 1; i++) 
			this.slideList[i].style.right = pixel;
	}
}