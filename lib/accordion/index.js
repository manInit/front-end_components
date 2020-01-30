class Accordion {
	constructor(id, activeClass) {
		const accordionRoot = document.getElementById(id);
		this.accordionTitle = accordionRoot.firstElementChild;
		this.accordionBody = accordionRoot.lastElementChild;
		this.activeClass = activeClass;
		this.accordionTitle.addEventListener('click', e => {
			this.changeActive();
		});
	}

	changeActive() {
		this.accordionBody.classList.toggle(this.activeClass); 
	}
}