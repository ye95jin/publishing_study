window.addEventListener("load",function(){
	// 페이지 구조 짜기 
	//header / section들 

	//패럴렉스 구조에서는 HTML 구조를 단순하게 잡아야 합니다. 
	/*
	<div id="start">>/div>
	<section id="page1"></section>
	<section id="page2"></section>
	*/

	/*
	let sub=document.querySelectorAll("section");

	// console.log(sub);

	// 배열 추가 메서드 : push()
	let pageList=[];
	
	pageList[0]=document.querySelector("header");

	sub.forEach(function(item){
		pageList.push(item); // 배열.push(추가될 배열자)
	});

	console.log(pageList);
	*/

	let gnb=document.querySelector("#gnb");
	let menuList=gnb.querySelectorAll("li");
	let pageList=document.querySelectorAll("section");

	// 1) 패럴렉스 구조 
	// 각 페이지에 접근하면 active 클래스를 넣어 봅시다. 
	// 익숙해지면 , 각 오브젝트에 적용 
	pageList.forEach(function(item, i){
		// const tl = gsap.timeline({ 오브젝트로 접근할때 
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top 80%",
				end: "bottom 20%",
				onEnter: function(){
					console.log((i+1) + "page enter");
					item.classList.add("active");
                    menuList[i].classList.add("active");
				},
				onLeave: function(){
					console.log((i+1) + "page leave");
					item.classList.remove("active");
                    menuList[i].classList.remove("active");
				},
				onEnterBack: function(){
					console.log((i+1) + "page enter back");
					item.classList.add("active");
                    menuList[i].classList.add("active");
				},
				onLeaveBack: function(){
					console.log((i+1) + "page leave back");
					item.classList.remove("active");
                    menuList[i].classList.remove("active");
				}
			}
		});
	});
	
});