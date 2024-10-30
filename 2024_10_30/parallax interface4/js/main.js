window.addEventListener("load", function(){
	let menuList=document.querySelectorAll(".controller li");
	let sub=document.querySelectorAll(".sub");

	let pageList=[];
	pageList[0]=document.querySelector(".main_area");

	sub.forEach(function(item){
		pageList.push(item);
	});

	if(isMobile){
		document.body.classList.add("ismobile");

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

		menuList.forEach(function(item, i){
			item.addEventListener("click", function(e){
				e.preventDefault();

				gsap.to(window, { scrollTo: pageList[i].offsetTop, duration: 0.5 });
			});
		});
	}
	else{
		let n=0;
		let targety=0;
		let moving=false;
		let winh;

		function init(){
			winh=window.innerHeight;
			handleUI(n);
		}

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

		init();

		window.addEventListener("resize", function(){
			winh=window.innerHeight;
			targety=n*winh;

			gsap.to(window, { scrollTo: targety, duration: 0.5 });
		});

		document.addEventListener("wheel", function(e){
			if(moving == true) return;

			moving=true;

			if(e.deltaY < 0){
				if(n > 0){
					n-=1;
				}
				else{
					return;
				}
			}
			else{
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
	}
});