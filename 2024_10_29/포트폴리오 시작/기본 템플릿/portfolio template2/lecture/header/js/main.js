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
});