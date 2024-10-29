window.addEventListener("load", function(){
	let menuList=document.querySelectorAll(".controller li");
	let sub=document.querySelectorAll(".sub");
	let pageList=[];

	pageList[0]=document.querySelector(".main_area");

	sub.forEach(function(item){
		pageList.push(item);
	});

	let n=0;
	let targety=0;
	let moving=false;
	let winh;

	function init(){
		winh=window.innerHeight;

		// menuList[n].classList.add("on");
		// pageList[n].classList.add("active");

		handleUI(n);
	}

	function handleUI(index){
		menuList.forEach(function(item, i){
			if(i == n){
				menuList[i].classList.add("on");
				pageList[i].classList.add("active");
			}
			else{
				menuList[i].classList.remove("on");
				pageList[i].classList.remove("active");
			}
		});
	}

	init();

	// document.addEventListener("wheel", function(e){
	document.addEventListener("mousewheel", function(e){
		// console.log(e.deltaY);
		// console.log(e.wheelDeltaY);

		if(moving == true) return;

		moving=true;

		if(e.wheelDeltaY > 0){
			// console.log("up");

			if(n > 0){
				n-=1;
			}
			else{
				return;
			}
		}
		else{
			// console.log("down");

			if(n < pageList.length-1){
				n+=1;
			}
			else{
				return;
			}
		}

		targety=n*winh;

		gsap.to(window, { scrollTo: targety, duration: 0.5, onComplete: function(){
			moving=false;
			handleUI(n);
		}});
	});

	window.addEventListener("resize", function(){
		winh=window.innerHeight;
		targety=n*winh;

		gsap.to(window, { scrollTo: targety, duration: 0.5 });
	});

	menuList.forEach(function(item, i){
		item.addEventListener("click", function(e){
			e.preventDefault();

			n=i;
			targety=n*winh;

			gsap.to(window, { scrollTo: targety, duration: 0.5, onComplete: function(){
				handleUI(n);
			}});
		});
	});
});