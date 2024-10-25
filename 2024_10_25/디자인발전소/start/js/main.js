window.addEventListener("load",function(){
	let n=0; // 페이지 변수
	let t=0; // 윈도우 상단 변수 
	let topPos=0; // 클릭했을 때의 이동 위치 

	let header=document.getElementById("header");
	let menuArea=header.firstElementChild; // #header > .menu_zone
	let mobile=menuArea.querySelector(".mobile");
	let tab=menuArea.querySelector(".tab");
	let dim=menuArea.querySelector(".dim");
	let btnTop=document.querySelector(".btn_top");

	let gnb=document.getElementById("gnb");
	let gnbList=gnb.querySelectorAll("ul > li"); 

	let mobileGnb=document.getElementById("m_gnb");
	let mobileGnbList=mobileGnb.querySelectorAll("ul > li");

	let section=this.document.querySelectorAll("section");
	let pageList=[header];

	// console.log(pageList);
	// console.log(section);

	section.forEach(function(item){
		pageList.push(item); // push() 배열 명령어는 공부하기
	});

	// GSAP
	// 메뉴 활성화 하는 애니메이션 타임라인을 생성해서 호출 함수로 메뉴를 활성화시킵니다.
	// onEnter, onLeave, onEnterBack, onLeaveBack
	pageList.forEach(function(item, i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top center",
				end: "bottom 20%",
				onEnter:function(){
					controlMenu(i);
				},
				onEnterBack:function(){
					controlMenu(i);
				}
			}
		});
	});

	function controlMenu(i){
		gnbList.forEach(function(list, j){
			if(j == i){
				gnbList[j].firstElementChild.classList.add("on");
				mobileGnbList[j].firstElementChild.classList.add("on");
			}
			else{
				gnbList[j].firstElementChild.classList.remove("on");
				mobileGnbList[j].firstElementChild.classList.remove("on");
			}
		});

		if(i != 0){
			menuArea.classList.add("active");
			btnTop.classList.add("active");
		}
		else{
			menuArea.classList.remove("active");
			btnTop.classList.remove("active");
		}
	}

	tab.addEventListener("click",function(e){
		e.preventDefault();

		mobile.classList.toggle("active");
		tab.classList.toggle("active");
		dim.classList.toggle("active");
	});

	dim.addEventListener("click",function(){
		mobile.classList.remove("active");
		tab.classList.remove("active");
		dim.classList.remove("active");
	});

	window.addEventListener("resize", function(){
		if(window.innerWidth > 720){
			if(mobile.classList.contains("active")){
				mobile.classList.remove("active");
				tab.classList.remove("active");
				dim.classList.remove("active");
			}
		}
	});

	gnbList.forEach(function(item, i){
		gnbList[i].addEventListener("click",function(e){
			e.preventDefault();

			topPos=pageList[i].offsetTop;
			gsap.to(window, {scrollTo: topPos, duration:0.4});
		});
		mobileGnbList[i].addEventListener("click",function(e){
			e.preventDefault();

			topPos=pageList[i].offsetTop;
			gsap.to(window, {scrollTo: topPos, duration:0.4, onComplete: function(){
				mobile.classList.remove("active");
				tab.classList.remove("active");
				dim.classList.remove("active");
			}});
		});
	});

	btnTop.addEventListener("click", function(e){
		e.preventDefault();
		gsap.to(window, {scrollTo: 0, duration:0.4});
	});

	/*
	gsap.from(".text_zone p", { 
		y: 30, opacity:0, duration:0.8, delay: 0
	});

	gsap.from(".text_zone h2", { 
		y: 30, opacity:0, duration:0.8, delay: 0.8
	});

	gsap.from(".text_zone .more", { 
		y: 30, opacity:0, duration:0.8, delay: 1.6
	});

	*/

	const tl1=gsap.timeline();

	tl1.from(".text_zone p",{ y: 30, opacity:0, duration:0.8, delay: 0});
	tl1.from(".text_zone h2",{ y: 30, opacity:0, duration:0.8, delay: 0});
	tl1.from(".text_zone .more",{ y: 30, opacity:0, duration:0.8, delay: 0});

	
	const tl2=gsap.timeline({
		scrollTrigger: {
			trigger: "#business",
			start: "top center",
			end: "bottom 20%"
		}
	});
	
	let businessList=document.querySelectorAll("#business li");

	/*
	tl2.fromTo(businessList,{
		y: 100, opacity: 0
	},{
		y: 0, opacity: 1, duration: 0.6, stagger: 0.6
	});
	*/

	businessList.forEach(function(item, i){
		if(i%2 == 1){
			tl2.fromTo(item, { y: 100, opacity: 0 },{ y: 0, opacity: 1, duration: 0.6, stagger: 0.6});
		}
		else{
			tl2.fromTo(item, { y: -100, opacity: 0 },{ y: 0, opacity: 1, duration: 0.6, stagger: 0.6});
		}
	});

});