let menuList=document.querySelectorAll(".controller li");
let sub=document.querySelectorAll(".sub");

let pageList=[];
pageList[0]=document.querySelector(".main_area");

sub.forEach(function(item){
	pageList.push(item);
});

let prevNum;

pageList.forEach(function(item, i){
	ScrollTrigger.create({
		trigger: item,
		start: "top 80%",
		end: "bottom 20%",
		onEnter: function(){
			if(item.classList.contains("active") == false){
				item.classList.add("active");
			}

			prevNum=i;

			// console.log("onEnter : "+prevNum);

			handleScroll(prevNum);
		},
		onLeave: function(){
			// console.log("onLeave : "+prevNum);

			handleScroll(prevNum);
		},
		onEnterBack: function(){
			prevNum=i;

			// console.log("onEnterBack : "+prevNum);

			handleScroll(prevNum);
		},
		onLeaveBack: function(){
			// console.log("onLeaveBack : "+prevNum);

			handleScroll(prevNum);
		}
	});
});

function handleScroll(index){
	menuList.forEach(function(item, i){
		if(i == index){
			item.classList.add("on");
		} else {
			item.classList.remove("on");
		}
	});
}

menuList.forEach(function(item, i){
	item.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, {scrollTo: pageList[i].offsetTop, duration: 0.5});
	});
});