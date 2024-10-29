window.addEventListener("load",function(){
	let menuList=document.querySelectorAll(".controller li");
	let sub=document.querySelectorAll(".sub");
	let pageList=[];

	pageList[0]=document.querySelector(".main_area");

	sub.forEach(function(item){
		pageList.push(item);
	}); //1 

	// console.log(pageList);

	let n = 0; // 페이지 번호 변수 
	let targety=0; //목표 위치 변수 //3
	let winh; // 윈도우 높이 변수 
	let moving=false; // 움직이면 true, 움직이지 않으면 false 입니다. //9

	// moving과 같은 변수를 플래그 변수라고 합니다. 

	function init(){
		winh=window.innerHeight; //4

		handleUI(n); //17
	}

	init(); //5 ()호출, init 형식은 함수 자체입니다. 

	/*
	window.addEventListener("resize", function(){ //6
		init();
	});
	*/

	window.addEventListener("resize",function(){
		winh=window.innerHeight;
		targety=n*winh;

		gsap.to(window,{ scrollTo: targety, duration:0.5});
	}); //6

	// window.addEventListener("wheel",function(){
	window.addEventListener("mousewheel",function(e){ //2

		if(moving == true) return; //10 

		//console.log(e.deltaY);
		//console.log(e.wheelDeltaY);

		if(e.wheelDeltaY > 0){
			//console.log("up");
			if(n > 0){ //감소식
				n-=1; 
			}
			else{
				return;
			}
		}

		else{
			//console.log("down");
			if(n < pageList.length-1){
				n+=1;
			}
			else{
				return;
			}
		}

		// console.log(n);
		// n * winh
		
		moving=true; //11 2회는 이벤트 코드 진입 불가능 

		targety=n*winh; //7

		gsap.to(window, { scrollTo: targety, duration: 0.5, onComplete: function(){
			moving=false; //15
			handleUI(n);
		}}); //8
	});

	function handleUI(index){ //16
		menuList.forEach(function(item, i){ 
			if(i == n){
				menuList[i].classList.add("on");
				pageList[i].classList.add("active"); // scrollTrigger로 해결 
			}
			else{
				menuList[i].classList.remove("on");
				pageList[i].classList.remove("active");
			}
		});
	}


	/*
	// 과제용 
	const startTl=gsap.timeline({ //18
		scrollTrigger: {
			trigger: "main_area",
			scrub: true,
			start: "top center",
			end: "bottom 20%"
		}
	});

	startTl.from(".keyvisual .title", {y:50 , opacity: 0, duration:0.5}); //19
	startTl.from(".keyvisual .p", {y:50 , opacity: 0, duration:0.5}); //19
	*/

	/*
	let addN=0; // 13

	document.querySelector(".controller li:first-child").addEventListener("click",function(e){ //12
		e.preventDefault();

		if(addN<5){ //14
			addN+=1;
		}
		else{
			return;
		}
		
		console.log(addN);
	});
	*/
});