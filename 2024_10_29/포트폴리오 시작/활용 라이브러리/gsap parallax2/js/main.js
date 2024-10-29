window.addEventListener("load", function(){
	lenisAnimation();

	gsap.timeline({
		scrollTrigger: {
			trigger: "#section1",
			pin: true,
			onEnter(){
				document.querySelector('header').classList.add('active');
			},
			onLeaveBack(){
				document.querySelector('header').classList.remove('active');
			},
			end: "+=800"
		}
	});

	gsap.fromTo(".html", {
		y: 200
	}, {
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "#section1",
			start: "top 30%",
			scrub: true
		}
	});

	gsap.fromTo(".css", {
		y: 2000
	}, {
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "#section1",
			start: "top 30%",
			scrub: true
		}
	});

	gsap.fromTo(".javascript", {
		y: 4000
	}, {
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "#section1",
			start: "top top",
			scrub: true
		}
	});

	gsap.fromTo(".sass", {
		y: 7000
	}, {
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "#section1",
			start: "top top",
			scrub: true
		}
	});

	gsap.fromTo(".react", {
		y: 2000
	}, {
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "#section1",
			start: "top 5%",
			scrub: true
		}
	});

	gsap.fromTo(".skills_wrap", {
		xPercent: 100
	}, { 
		xPercent: 0,
		scrollTrigger: {
			trigger: "#section2",
			pin: true,
			start: "top top",
			end: "+=2000",
			scrub: true,
		}
	});
});