window.addEventListener("load", function(){
	// mobile menu + navigation
	let header=document.getElementById("header");

	let desktopFlag;

	function checkWindowSize(){
		let winw=window.innerWidth;

		if(winw > 1240){
			desktopFlag=true;
		}
		else{
			desktopFlag = false;
		}

		if(header.classList.contains("menu-open")){
			header.classList.remove("menu-open");
		}
	}

	checkWindowSize();

	window.addEventListener("resize", checkWindowSize);

	let menuTab=document.querySelector(".hd-allmenu-open");
	let dimmed=document.querySelector(".hd-menu .hd-mak");
	let gnb=document.querySelector(".gnb");
	let gnbList=gnb.children;

	menuTab.addEventListener("click", function(){
		header.classList.toggle("menu-open");
	});

	dimmed.addEventListener("click", function(){
		document.getElementById("header").classList.remove("menu-open");
	});

	for(let i=0; i<gnbList.length; i++){
		gnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			if(desktopFlag) return;

			if(e.currentTarget.classList.contains("no-depth")) return;

			if(!e.currentTarget.classList.contains("open")){
				for(let j=0; j<gnbList.length; j++){
					if(j == i){
						gnbList[j].classList.add("open");
					}
					else{
						gnbList[j].classList.remove("open");
					}
				}
			}
			else{
				e.currentTarget.classList.remove("open");
			}
		});

		gnbList[i].addEventListener("mouseenter", function(){
			if(!desktopFlag) return;

			header.classList.add("on");
			header.style.height="300px";
		});

		gnbList[i].addEventListener("mouseleave", function(){
			if(!desktopFlag) return;

			header.classList.remove("on");
			header.removeAttribute("style");
		});
	}

	// slider
	const visualSwiper=new Swiper(".main-slider .swiper", {
		loop: true,
		speed: 2000,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 5000
		},
		pagination: {
			el: ".main-slider .swiper-pagination",
			clickable: true,
			renderBullet: function(index, className){
				// console.log(index, className);

				// return <span class="swiper-pagination-bullet">01</span>
				// return '<span class="'+className+'">0'+(index+1)+'</span>';
				return `<span class="${className}">0${(index+1)}</span>`;
			}
		}
	});

	const prdSwiper=new Swiper(".main-product .swiper", {
		loop: true,
		speed: 2000,
		slidesPerView: 1.5,
		centeredSlides: true,
		spaceBetween: 20,
		autoplay: {
			delay: 2000
		},
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1025: {
				slidesPerView: 4.5,
				spaceBetween: 50
			}
		}
	});

	// parallax
	// console.log(window.matchMedia("(max-width: 768px)")); // { matches: true, media: "(max-width: 768px)", onchange: null }

	if(window.matchMedia("(max-width: 768px)").matches){ // mobile
		// document.querySelectorAll(".main-typo").forEach(function(mainTypo){
		gsap.utils.toArray(".main-typo").forEach(function(mainTypo){
			const tl=gsap.timeline({
				scrollTrigger: {
					trigger: mainTypo,
					scrub: 1, // You can reverse the animation as the user scrolls up or down.
					start: "top bottom" // The animation begins when the top of the element reaches the bottom of the viewport.
				}
			});

			tl.to(mainTypo.querySelector("div:nth-child(1)"), {
				x: "-7%",
				duration: 1
			});

			tl.to(mainTypo.querySelector("div:nth-child(2)"), {
				x: "7%",
				duration: 1,
				delay: -1
			});
		});
	}
	else{ // pc
		gsap.utils.toArray(".main-typo").forEach(function(mainTypo){
			const tl=gsap.timeline({
				scrollTrigger: {
					trigger: mainTypo,
					scrub: 1,
					start: "top bottom"
				}
			});

			tl.to(mainTypo.querySelector("div:nth-child(1)"), {
				x: "-20%",
				duration: 1
			});

			tl.to(mainTypo.querySelector("div:nth-child(2)"), {
				x: "20%",
				duration: 1,
				delay: -1
			});
		});
	}

	gsap.utils.toArray(".scale-ani").forEach(function(scaleAni){
		const tl=gsap.timeline({
			scrollTrigger: {
				trigger: scaleAni,
				start: "top bottom",
				onEnter: function(){
					scaleAni.classList.add("active");
				},
				onLeave: function() {
					scaleAni.classList.remove("active");
				},
				onLeaveBack: function() {
					scaleAni.classList.remove("active");
				}
			},
			delay: 2
		});
	});

	// etc
	let customHover=document.querySelectorAll(".custom-hover");
	let pageTop=document.querySelector("#page-top");
	let btnTop=pageTop.querySelector(".btn-top");

	document.body.addEventListener("mousemove", function(e){
		gsap.to("#custom-cursor, #custom-cursor-text", {
			x: e.clientX,
			y: e.clientY,
			duration: 1.2,
			ease: Power3.easeOut
		});
	});

	customHover.forEach(function(item){
		item.addEventListener("mouseenter", function(){
			gsap.to(".custom-hover-circle", {
				width: "100%",
				height: "100%",
				autoAlpha: 1,
				duration: 0.3,
				ease: Power3.easeOut
			});

			gsap.to(".custom-hover-text", {
				width: "100%",
				height: "100%",
				opacity: 1,
				duration: 0.3,
				ease: Power3.easeOut
			});
		});

		item.addEventListener("mouseleave", function(){
			gsap.to(".custom-hover-circle", {
				width: 0,
				height: 0,
				opacity: 0,
				duration: 0.2,
				ease: Power3.easeOut
			});

			gsap.to(".custom-hover-text", {
				width: 0,
				height: 0,
				opacity: 0,
				duration: 0.2,
				ease: Power3.easeOut
			});
		});
	});

	window.addEventListener("scroll", function(){
		let winH=window.innerHeight;

		if(window.scrollY > winH){
			if(!pageTop.classList.contains("show")){
				pageTop.classList.add("show");
			}
		}
		else{
			if(pageTop.classList.contains("show")){
				pageTop.classList.remove("show");
			}
		}
	});

	btnTop.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, {scrollTo: 0, duration: 0.3, ease: Power3.easeOut});
	});

	lenisAnimation();
});