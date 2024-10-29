window.addEventListener("load", function(){
	let header=document.getElementById("header");
	let tab=header.querySelector(".tab");
	let menu=header.querySelector(".total");
	let menuList=menu.querySelectorAll("li");
	let pageList=document.querySelectorAll("section");

	pageList.forEach(function(item, i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top center",
				end: "bottom 20%",
				onEnter: function(){
					controlMenu(i);
				},
				onEnterBack: function(){
					controlMenu(i);
				}
			}
		});
	});

	function controlMenu(n){
		menuList.forEach(function(item, i){
			if(i == n){
				menuList[i].classList.add("active");
			}
			else{
				menuList[i].classList.remove("active");
			}
		});
	}

	const mainTl=gsap.timeline();

	mainTl.from(".keytext p", { y: 40, opacity: 0, duration: 0.5, stagger: 0.5 })
	.from(".keytext strong", { y: 40, opacity: 0, duration: 0.3, stagger: 0.3 });

	const profileTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#page1",
			start: "top center",
		}
	});

	profileTl.from("#page1 .title", { y: 50, opacity: 0, duration: 0.5 })
	.from("#page1 .introduce", { y: 50, opacity: 0, duration: 0.5 });

	const skillsTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#page2",
			start: "top center",
		}
	});

	skillsTl.from(".skills li", { y: 50, opacity: 0, duration: 0.5, stagger: 0.5 });

	const workTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#page3",
			start: "top center",
		}
	});

	workTl.from("#page3 .title", { y: 50, opacity: 0, duration: 0.5 })
	.from(".work li", { y: 50, opacity: 0, duration: 0.5, stagger: 0.5 });

	tab.addEventListener("click", function(e){
		e.preventDefault();

		if(tab.classList.contains("active") == false){
			document.body.classList.add("fixed");
			tab.classList.add("active");

			gsap.fromTo(menu, { display: "block", opacity: 0 }, { opacity: 1, duration: 0.3 });
		}
		else{
			document.body.classList.remove("fixed");
			tab.classList.remove("active");

			gsap.to(menu, { opacity: 0, duration: 0.3, onComplete: function(){
				menu.removeAttribute("style");
			}});
		}
	});

	let mainSlider=document.querySelector("#start .main_slider");
	let controller=mainSlider.querySelector(".controller");
	let [num, progressbar, direction]=controller.children;
	let bar=progressbar.firstElementChild;
	let [prevBtn, nextBtn]=direction.children;
	let tween, current, total;

	function swiperButtonInteraction(n){
		switch(n){
			case 0 :
				prevBtn.classList.remove("visible");
				nextBtn.classList.add("visible");
				break;
			case total-1 :
				prevBtn.classList.add("visible");
				nextBtn.classList.remove("visible");
				break;
			default :
				prevBtn.classList.add("visible");
				nextBtn.classList.add("visible");
				break;
		}
	}

	const mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		loop: true,
		/*
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
		*/
		on: {
			init(){
				current=this.realIndex;
				total=this.slides.length;

				num.innerHTML=`${current+1} / ${total}`;

				swiperButtonInteraction(current);

				tween=gsap.to(bar, { width: "100%", duration: 8 });
			},
			slideChange(){
				current=this.realIndex;

				num.innerHTML=`${current+1} / ${total}`;

				swiperButtonInteraction(current);

				tween.pause();
				tween.seek(0);

				setTimeout(function(){
					tween.play();
				}, 10);
			}
		}
	});

	prevBtn.addEventListener("click", function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});

	nextBtn.addEventListener("click", function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
});