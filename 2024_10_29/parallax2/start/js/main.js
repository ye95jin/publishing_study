window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);

    let menuList = document.querySelectorAll("#gnb ul li");
    let asideMenuList = document.querySelectorAll(".aside ul li"); 
    let sub = document.querySelectorAll("section");
    let pageList = Array.from(sub);

    let n = 0;
    let winh;
    let moving = false;

    function init() {
        winh = window.innerHeight;
        handleUI(n);
    }

    init();

    window.addEventListener("resize", function () {
        winh = window.innerHeight;
        let targety = pageList[n].offsetTop;
        gsap.to(window, { scrollTo: targety, duration: 0.5 });
    });

    window.addEventListener("wheel", function (e) {
        if (moving) return;

        if (e.deltaY < 0) {
            if (n > 0) {
                n -= 1;
            } else {
                return;
            }
        } else {
            if (n < pageList.length - 1) {
                n += 1;
            } else {
                return;
            }
        }

        moveToSection(n);
    });

    function moveToSection(index) {
        moving = true;
        let targety = pageList[index].offsetTop;

        gsap.to(window, {
            scrollTo: targety, 
            duration: 0.5,
            onComplete: function () {
                moving = false;
                handleUI(index);
            }
        });
    }

    function handleUI(index) {
        menuList.forEach(function (item, i) {
            if (i == index) {
                item.classList.add("on");
                pageList[i].classList.add("active");
            } else {
                item.classList.remove("on");
                pageList[i].classList.remove("active");
            }
        });

        asideMenuList.forEach(function (item, i) {
            if (i == index) {
                item.classList.add("active"); 
            } else {
                item.classList.remove("active"); 
            }
        });
    }

    menuList.forEach((menuItem, index) => {
        menuItem.addEventListener("click", function (e) {
            e.preventDefault();
            n = index; 
            moveToSection(n);
        });
    });

    asideMenuList.forEach((asideItem, index) => {
        asideItem.addEventListener("click", function (e) {
            e.preventDefault();
            n = index; 
            moveToSection(n);
        });
    });

    // Page 1 애니메이션
	const introTl = gsap.timeline({
		scrollTrigger: {
			trigger: "#page1",
			start: "top center",
			end: "bottom 20%",
			toggleActions: "play reverse play none" 
		}
	});

	introTl.fromTo("#page1 .text span", { display: "none", y: 100, opacity: 0 }, { display: "block", y: 0, opacity: 1, duration: 0.7 });
	introTl.fromTo("#page1 .text p", { display: "none", y: 100, opacity: 0}, { display: "block", y: 0, opacity: 1, duration: 0.7 });


    // Page 2 애니메이션
    const page2Tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "top center",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        }
    });
    page2Tl.from("#page2 .title", { y: 100, opacity: 0, duration: 0.7 });
    page2Tl.from("#page2 .desc", { y: 100, opacity: 0, duration: 0.7 });

    // Page 3 애니메이션
    const page3Tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            start: "top center",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        }
    });
    page3Tl.from("#page3 .description .cont", { y: 100, opacity: 0, duration: 0.7, stagger: 0.2 });

    // Page 4 애니메이션
    const page4Tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            start: "top center",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        }
    });
    page4Tl.from("#page4 .profile .info1", { y: 100, opacity: 0, duration: 0.7 });
    page4Tl.from("#page4 .profile .info2", { y: 100, opacity: 0, duration: 0.7 });

    // Page 5 애니메이션
    const page5Tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            start: "top center",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        }
    });
    page5Tl.from("#page5 .portfolio h2", { y: 100, opacity: 0, duration: 0.7 });
    page5Tl.from("#page5 .portfolio .cont", { y: 100, opacity: 0, duration: 0.7 });
});
