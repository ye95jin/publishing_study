// 모바일 : 스크롤 

// 데스크탑 : 휠 

window.addEventListener("load",function(){
	let menuList=document.querySelectorAll(".controller li");
	let sub=document.querySelectorAll(".sub");

	let pageList=[];
	pageList[0]=document.querySelector(".main_area");

	sub.forEach(function(item){
		pageList.push(item);
	});

	if(isMobile){ // mobile
		// console.log("월요일 스크롤 복습");
		document.body.classList.add("mobile");

		pageList.forEach(function(item, i){
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					end: "bottom 20%",
					onEnter: function(){
						item.classList.add("active");
						handleUI(i);
					},
					onEnterBack: function(){
						handleUI(i);
					}
				}
			});
		});
	
		function handleUI(n){
			menuList.forEach(function(item, i){
				if(i == n){
					item.classList.add("on");
				} else {
					item.classList.remove("on");
				}
			});
		}
	}
	else{ //desktop
		// console.log("화요일 휠 복습");

		let n=0;
		let targety=0;
		let winh;
		
		function init(){
			winh=window.innerHeight;
		}
		
		init();

		function handleUI(n){
			menuList.forEach(function(item, i){
				if(i == n){
					item.classList.add("on");
					pageList[i].classList.add("active");
				}
				else{
					item.classList.remove("on");
					pageList[i].classList.remove("active");
				}
			});
		}

		let moving=false; // false는 휠 움직임이 없는 상태, true는 휠 움직임이 있는 상태

		window.addEventListener("wheel",function(e){
			if(moving == true) return; // 휠 움직임이 있는 상태로 들어온 경우이므로 종료

			if(e.deltaY < 0){ // up, 감소식
				if(n > 0){
					n-=1;
				}
				else{
					return;
				}
			}
			else{ //down, 증가식 
				if(n < pageList.length-1){
					n+=1;
				}
				else{
					return;
				}
			}
			moving=true;

			console.log(n);

			targety=n*winh;

			gsap.to(window, { scrollTo : targety, duration: 0.5, onComplete: function(){
				moving=false;
				handleUI(n);
			}});
		});
	}
});