window.addEventListener("load", function(){
	gsap.set(".cluster1", {yPercent: 5});
	gsap.set(".circle", {yPercent: -5});
	gsap.set(".photo1", {yPercent: -20});
	gsap.set(".dots-element1", {yPercent: 10});

	gsap.to(".cluster1", {
		yPercent: -5,
		ease: "none",
		scrollTrigger: {
			trigger: "cluster1",
			end: "bottom center",
			scrub: 1
		}
	});

	gsap.to(".circle", {
		yPercent: 5,
		ease: "none",
		scrollTrigger: {
			trigger: ".cluster1",
			scrub: 1
		}
	});

	gsap.to(".photo1", {
		yPercent: 20,
		ease: "none",
		scrollTrigger: {
			trigger: ".cluster1",
			scrub: 1
		}
	});

	gsap.to(".dots-element1", {
		yPercent: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".cluster1",
			scrub: 1
		}
	});

	gsap.set(".cluster2", {yPercent: 5});
	gsap.set(".triangle", {yPercent: 25, rotation:-90});
	gsap.set(".photo2", {yPercent: -20});
	gsap.set(".cluster .dots_element2", {yPercent: 10});

	gsap.to(".cluster2", {
		yPercent: -5,
		ease: "none",
		scrollTrigger: {
		trigger: ".cluster2",
		end: "bottom center",
			scrub: 1
		}
	});

	gsap.to(".triangle", {
		yPercent: -5,
		rotation: 40,
		ease: "none",
		scrollTrigger: {
			trigger: ".cluster2",
			scrub: 1
		}
	});

	gsap.to(".photo2", {
		yPercent: 20,
		ease: "none",
		scrollTrigger: {
		trigger: ".cluster2",
			scrub: 1
		}
	});

	gsap.to(".cluster .dots_element2", {
		yPercent: -10,
		ease: "none",
		scrollTrigger: {
		trigger: ".cluster2",
			scrub: 1
		}
	});

	const title1=document.querySelector(".title1");
	const SplitGreat=new SplitText(title1, {type: "words, chars"});
	let chars1=SplitGreat.chars;

	const tlSplit=gsap.timeline();

	tlSplit.from(chars1, {
		duration: 0.8,
		opacity: 0,
		y: 10,
		ease: "circ.out",
		stagger: 0.02
	});

	const title2=document.querySelector(".title2");
	const SplitBurrowing=new SplitText(title2, {type: "words, chars"});
	let chars2=SplitBurrowing.chars;

	tlSplit.from(chars2, {
		duration: 0.8,
		opacity:0,
		y:10,
		ease:"circ.out",
		stagger: 0.02,
		scrollTrigger: {
			trigger: ".titleBurrowing",
			start: "top 75%",
			end: "bottom center",
			scrub: 1
		}
	});
});