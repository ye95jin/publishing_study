window.addEventListener("load", function(){
	lenisAnimation();

	let header=document.querySelector("header");

	/*
	gsap.to(header, {
		scrollTrigger: {
			trigger: "#section1",
			pin: true,
			onEnter(){
				// console.log("enter");

				header.classList.add("active");
			},
			onLeaveBack(){
				// console.log("leave back");

				header.classList.remove("active");
			},
			start: "top top",
			end: "+=1200"
		}
	});
	*/

	gsap.timeline({
		scrollTrigger: {
			trigger: "#section1",
			pin: true,
			onEnter(){
				header.classList.add("active");
			},
			onLeaveBack(){
				header.classList.remove("active");
			},
			start: "top top",
			end: "+=1200"
		}
	});

	gsap.fromTo(".html", {
		y: 200
	},{
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "section1",
			start: "top 30%",
			scrub: true
		}
	});

	gsap.fromTo(".css", {
		y: 2000
	},{
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "section1",
			start: "top 30%",
			scrub: true
		}
	});

	gsap.fromTo(".javascript", {
		y: 4000
	},{
		y: -2000,
		duration: 0.7,
		ease: "none",
		scrollTrigger: {
			trigger: "section1",
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
			scrub: true,
			start: "top top",
			end: "+=2000"
		}
	});
});