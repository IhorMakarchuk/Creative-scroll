gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create ({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true
})

gsap.fromTo('.hero-section', { opacity: 1 }, {
	opacity: 0,
	scrollTrigger: {
		trigger: ('.hero-section'),
		start: 'center',
		end: '820',
		scrub: true
	}
})

let itemsL = gsap.utils.toArray('.gallery_left .gallery_item');

itemsL.forEach(item => {
	gsap.fromTo(item, {x: -70, opacity: 0 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})

let itemsR = gsap.utils.toArray('.gallery_right .gallery_item'); 

itemsR.forEach(item => {
	gsap.fromTo(item, {x: 70, opacity: 0 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})