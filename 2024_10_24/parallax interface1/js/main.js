window.addEventListener("load",function(){
	// section 위치(trigger)에서 active를 추가합니다.

	// 위의 내용이 구현되면 각 요소마다 움직이는 방식을 구현해 봅시다.
	let gnb=document.querySelector("#gnb");
	let menuList=gnb.querySelectorAll("li");
	let pageList=document.querySelectorAll(".container section");

	// 150보다 크면 gnb에 fixed 클래스를 추가합니다.  
	window.addEventListener("scroll", function(){
		// console.log(window.scrollY)

		if(window.scrollY > 150){
			gnb.classList.add("fixed");
		}
		else{
			gnb.classList.remove("fixed");
		}
	});

	//Timeline은 애니메이션 셋팅을 할 수 있습니다. 
	pageList.forEach(function(item,i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item, 
				start: "top 80%", /* #pxge2 top, 윈도우의 80% 지점에서 닿을 때*/
				end: "bottom 20%", /* #pxge2 bottom, 윈도우의 20% 지점에서 닿을 때*/
				onEnter: function(){
					// console.log(i);

					menuList.forEach(function(item2, j){
						if(j == i){
							item2.classList.add("active");
						}
						else{
							item2.classList.remove("active");
						}
					});

					item.classList.add("active"); // <section id="page3" class= "active">
				},
				onEnterBack: function(){
					// controlMenu(i);
					menuList.forEach(function(item2, j){
						if(j == i){
							item2.classList.add("active");
						}
						else{
							item2.classList.remove("active");
						}
					});
				}
			}
		});
	});

	menuList.forEach(function(item,i){
		item.addEventListener("click",function(e){
			e.preventDefault();

			// console.log(item, pageList[i],pageList[i].offsetTop);
			// i가 2라고 가정하면 
			// item : <li><a href="#page3">page3</a></li>
			// pageList[i] : <section id="page3">
	
			// GNB를 누르면 위도우 상단 위치를 페이지 위치로 이동시켜주시면 됩니다.
			// 윈도우 상단 위치 : scrollTo

			gsap.to(window, { scrollTo: pageList[i].offsetTop, duration: 0.5});
		});
	});
});