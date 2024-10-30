window.addEventListener("load", function(){
	let head=document.querySelector("head");
	let script=document.createElement("script");

	if(isMobile){
		script.setAttribute("src", "js/mobile.js");
	}
	else{
		script.setAttribute("src", "js/desktop.js");
	}

	head.appendChild(script);
});