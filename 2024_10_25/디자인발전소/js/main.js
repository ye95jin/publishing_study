window.addEventListener("load", function(){
	let n=0;
	let t=0;
	let topPos=0;

	let header=document.getElementById("header");
	let menuArea=header.firstElementChild;
	let mobile=menuArea.querySelector(".mobile");
	let tab=menuArea.querySelector(".tab");
	let dim=menuArea.querySelector(".dim");

	let gnb=document.getElementById("gnb");
	let gnbList=gnb.firstElementChild.children;

	gnbList[n].firstElementChild.classList.add("on");

	let mobileGnb=document.getElementById("m_gnb");
	let mobileGnbList=mobileGnb.firstElementChild.children;

	let section=document.querySelectorAll("section");
	let pageList=[header];

	for(let i=0; i<section.length; i++){
		pageList.push(section[i]);
	}

	pageList.forEach(function(item, i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top center",
				end: "bottom 20%",
				onEnter: function(){
					handleScroll(i);
				},
				onEnterBack: function(){
					handleScroll(i);
				}
			}
		});
	});

	let titleElements=document.querySelectorAll(".text_zone *");
	let btnTop=document.querySelector(".btn_top");

	/*
	gsap.fromTo(".text_zone p", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0 });
	gsap.fromTo(".text_zone h2", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.8 });
	gsap.fromTo(".text_zone .more", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1.6 });
	*/

	/*
	const tl1=gsap.timeline();

	tl1.fromTo(".text_zone p", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
	.fromTo(".text_zone h2", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
	.fromTo(".text_zone .more", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
	*/

	const tl1=gsap.timeline();

	tl1.fromTo(titleElements, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.5 });

	const tl2=gsap.timeline({
		scrollTrigger: {
			trigger: "#business",
			start: "top center",
			end: "bottom 20%"
		}
	});

	let businessList=document.querySelectorAll("#business li");

	// tl2.fromTo(businessList, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.6 });

	businessList.forEach(function(item, i){
		if(i%2 == 1){
			tl2.fromTo(item, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
		else{
			tl2.fromTo(item, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
		}
	});

	btnTop.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, {scrollTo: 0, duration: 0.4});
	});

	function handleScroll(index){
		for(let i=0; i<gnbList.length; i++){
			if(i == index){
				gnbList[i].firstElementChild.classList.add("on");
			}
			else{
				gnbList[i].firstElementChild.classList.remove("on");
			}
		}

		if(index == 0){
			if(menuArea.classList.contains("active") == true){
				menuArea.classList.remove("active");
				btnTop.classList.remove("active");
			}
		}
		else{
			if(menuArea.classList.contains("active") == false){
				menuArea.classList.add("active");
				btnTop.classList.add("active");
			}
		}
	}

	window.addEventListener("resize", function(){
		w=window.innerWidth;

		if(w > 720){
			if(mobile.classList.contains("active")){
				mobile.classList.remove("active");
				tab.classList.remove("active");
				dim.classList.remove("active");
			}
		}
	});

	// menu
	tab.addEventListener("click", function(e){
		e.preventDefault();

		mobile.classList.toggle("active");
		tab.classList.toggle("active");
		dim.classList.toggle("active");
	});

	dim.addEventListener("click", function(){
		mobile.classList.remove("active");
		tab.classList.remove("active");
		dim.classList.remove("active");
	});

	for(let i=0; i<gnbList.length; i++){
		gnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			n=i;
			handleScroll(n);
			topPos=pageList[n].offsetTop;
			gsap.to(window, {scrollTo: topPos, duration: 0.4});
		});

		mobileGnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			n=i;
			handleScroll(n);
			topPos=pageList[n].offsetTop;

			mobile.classList.remove("active");
			tab.classList.remove("active");
			dim.classList.remove("active");

			gsap.to(window, {scrollTo: topPos, duration: 0.4, delay: 0.4});
		});
	}
});