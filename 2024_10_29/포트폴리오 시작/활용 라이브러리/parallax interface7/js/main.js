window.addEventListener("load", function(){
	lenisAnimation();

	setTimeout(function(){
		gsap.to(window, { scrollTo: 0, duration: 0.5 });
	}, 200);

	new Swiper(".updateSwiper", {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 10,
		breakpoints: {
			768: {
				spaceBetween: 0,
				pagination: {
					el: ".updateSwiper .swiper-pagination",
					type: "fraction"
				},
				navigation: {
					prevEl: ".updateSwiper .swiper-button-prev",
					nextEl: ".updateSwiper .swiper-button-next"
				}
			}
		}
	});

	let mediaQuery=gsap.matchMedia();

	// console.log(mediaQuery);

	mediaQuery.add("(min-width: 769px)", function(){ // desktop
		let deviceHeight=window.innerHeight;
		let contentsHeight=document.querySelector(".pj_wrapper").offsetHeight;
		let totalHeight=deviceHeight+contentsHeight;

		// console.log(deviceHeight, contentsHeight, totalHeight);

		const projectTl=gsap.timeline({
			scrollTrigger: {
				trigger: ".project",
				scrub: true,
				pin: true,
				start: "top top",
				// end: "+="+totalHeight
			}
		});

		projectTl.fromTo(".pj_wrapper", {
			y: 400
		}, {
			y: (deviceHeight > 1080) ? -totalHeight : -(totalHeight+620),
			duration: 3
		});

		// console.log((deviceHeight > 1080) ? -totalHeight : -(totalHeight+620));

		/*
		gsap.fromTo(".comment .aosup", {
			y: 300,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 0.8,
			scrollTrigger: {
				trigger: ".comment",
				scrub: true,
				start: "top 50%"
			}
		});
		*/

		gsap.from(".comment .aosup", {
			y: 300,
			opacity: 0,
			duration: 0.8,
			scrollTrigger: {
				trigger: ".comment",
				scrub: true,
				start: "top 50%"
			}
		});

		let deviceWidth=window.innerWidth;

		// console.log(deviceWidth);

		const updateTl=gsap.timeline({
			scrollTrigger: {
				trigger: ".update",
				scrub: true,
				pin: true,
				start: "top top",
				end: "+="+1200
			}
		});

		updateTl.to(".update_top", {
			x: deviceWidth >= 1920 ? 414 : (deviceWidth >= 1024 ? 265 : 90)
		}, "ontime1");

		updateTl.to(".update_bottom", {
			x: deviceWidth >= 1920 ? -414 : (deviceWidth >= 1024 ? -265 : -90)
		}, "ontime1");

		updateTl.to(".update_top", { y: -194 }, "ontime2");

		updateTl.to(".update_bottom", { y: 206 }, "ontime2");

		updateTl.to(".updateSwiper", { display: "block", height: 400 }, "ontime2");

		updateTl.to(".update_btn", { display: "block", opacity: 1});
	});

	mediaQuery.add("(max-width: 768px)", function(){ // mobile
		gsap.from(".project_text", {
			y: -50,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: ".project",
				start: "top 80%",
				toggleActions: "play none none reset" // onEnter onLeave onEnterBack onLeaveBack
			}
		});

		const projectTl=gsap.timeline({
			scrollTrigger: {
				trigger: ".pj_wrapper",
				scrub: true,
				pin: false,
				start: "top 90%",
				end: "bottom bottom"
			}
		});

		projectTl.fromTo(".pj_wrapper .pj_box", {
			y: 100,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			ease: Power3.easeOut,
			stagger: 1
		});

		gsap.from(".comment .aosup", {
			y: 300,
			opacity: 0.6,
			duration: 1.5,
			scrollTrigger: {
				trigger: ".comment",
				scrub: true,
				start: "top 70%"
			}
		});

		gsap.from(".update_title", {
			y: -50,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: ".update",
				start: "top 80%",
				toggleActions: "play none none reset"
			}
		});
	});
});