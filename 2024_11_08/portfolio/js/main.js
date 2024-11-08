window.addEventListener("load", function () {
  // lenisAnimation 함수 호출
  lenisAnimation();
  ui.init();

  // header 요소 선택
  let header = document.querySelector("header");

  // 윈도우 로드 시 스크롤을 0으로 이동
  // setTimeout(function () {
  //   gsap.to(window, { scrollTo: 0, duration: 0.5 });
  // }, 200);


  // 텍스트와 메인 스타 애니메이션을 함께 설정
  const textAndStarTimeline = gsap.timeline({ delay: 0.5 });

  // 텍스트가 메인 스타보다 빨리 나오도록 조정
  textAndStarTimeline
    .from(".img-box img", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    })
    .from(".sc-intro .text-box .text", {
      y: 150,
      opacity: 0,
      duration: 0.8, // 텍스트가 더 빨리 나타나도록 시간 조정
      ease: "power3.out"
    }, "-=1") // 더 많이 겹치도록 설정
    .from(".sc-intro .text-box .main-text", {
      y: 150,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.9")
    .from(".sc-intro .text-box .mini-text", {
      x: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.7")
    .from(".particle", {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });


  // 스크롤에 따라 파티클 회전 애니메이션
  gsap.utils.toArray(".particle").forEach((particle) => {
    gsap.to(particle, {
      rotation: 360,
      ease: "linear",
      duration: 3,
      scrollTrigger: {
        trigger: ".sc-intro",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      }
    });
  });

// Scroll Down 버튼과 아이콘 애니메이션을 통일
gsap.to([".scroll-icon", ".scroll-btn"], {
  y: -8, // 위로 살짝 이동
  duration: 0.6, // 더 부드럽게 움직이도록 조정
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1 // 무한 반복
});
  

  // .sc-about 섹션을 트리거로 하는 gsap 타임라인 설정
  gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-about",
      pin: true,
      // .sc-about 섹션에 도달하면 header에 active 클래스 추가
      onEnter() {
        header.classList.add("active");
      },
      // .sc-about 섹션을 벗어나면 header에서 active 클래스 제거
      onLeaveBack() {
        header.classList.remove("active");
      }
    }
  });

  // .icon1 요소의 애니메이션 설정
  gsap.fromTo(
    ".icon1",
    {
      y: 200
    },
    {
      y: -2000,
      duration: 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: ".sc-about",
        start: "top 30%",
        scrub: true
      }
    }
  );

  // .icon2 요소의 애니메이션 설정
  gsap.fromTo(
    ".icon2",
    {
      y: 2000
    },
    {
      y: -2000,
      duration: 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: ".sc-about",
        start: "top 30%",
        scrub: true
      }
    }
  );

  // .icon3 요소의 애니메이션 설정
  gsap.fromTo(
    ".icon3",
    {
      y: 4000
    },
    {
      y: -1000,
      duration: 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: ".sc-about",
        start: "top top",
        scrub: true
      }
    }
  );

  // .icon4 요소의 애니메이션 설정
  gsap.fromTo(
    ".icon4",
    {
      y: 4000
    },
    {
      y: -300,
      duration: 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: ".sc-about",
        start: "top top",
        scrub: true
      }
    }
  );

  // .skills_wrap 요소의 애니메이션 설정
  gsap.fromTo(
    ".skills_wrap",
    {
      xPercent: 100
    },
    {
      xPercent: 0,
      scrollTrigger: {
        trigger: ".sc-skills",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=1000"
      }
    }
  );

  // About 섹션 텍스트 애니메이션 설정
gsap.from(".sc-about .title h2", {
	scrollTrigger: {
	  trigger: ".sc-about",
	  start: "top 50%", // 화면에 나타날 때 애니메이션 시작
	  toggleActions: "play none none reverse",
	},
	y: 50,              // 아래에서 위로 이동
	opacity: 0,         // 처음엔 투명
	duration: 1,        // 애니메이션 지속 시간
	ease: "power3.out", // 부드러운 애니메이션
  });
  
  gsap.from(".sc-about .title p", {
	scrollTrigger: {
	  trigger: ".sc-about",
	  start: "top 50%", // 화면에 나타날 때 애니메이션 시작
	  toggleActions: "play none none reverse",
	},
	y: 50,               // 아래에서 위로 이동
	opacity: 0,          // 처음엔 투명
	duration: 1,         // 애니메이션 지속 시간
	delay: 0.3,          // h2 텍스트 후에 나타남
	ease: "power3.out",  
  });

    // 스킬 섹션 타이틀 애니메이션 설정
	gsap.from(".sc-skills .title h2", {
		scrollTrigger: {
		  trigger: ".sc-skills",
		  start: "top 60%", // sc-skills 섹션이 화면에 나타날 때 시작
		  toggleActions: "play none none reverse",
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out"
	  });


  // 프로젝트 섹션 스크립트
  let mediaQuery = gsap.matchMedia();

  mediaQuery.add("(min-width: 769px)", function () {
    // desktop
    let deviceHeight = window.innerHeight;
    let contentsHeight = document.querySelector(".pj_wrapper").offsetHeight;

    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=" + contentsHeight
      }
    });

    projectTl.fromTo(
      ".pj_wrapper",
      {
        y: 400
      },
      {
        y: -contentsHeight + 620,
        duration: 3
      }
    );

    // .project-star-icon 요소의 애니메이션 설정
    gsap.fromTo(
      ".project-star-icon",
      {
        y: 400
      },
      {
        y: -deviceHeight / 4,
        duration: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: ".pj_wrapper",
          start: "top top",
          scrub: true
        }
      }
    );
  });

  // ALL PROJECT 호버 이벤트: 이미지 바꾸기
  let allProjectA = document.querySelector(".pj_box5 a");
  allProjectA.addEventListener("mouseenter", function () {
    document.querySelector(".pj_box5 img").src = "images/btn_view_more_w.png";
  });
  allProjectA.addEventListener("mouseleave", function () {
    document.querySelector(".pj_box5 img").src = "images/btn_view_more.png";
  });

  // 스킬 카드 호버 이벤트: 설명란이 이미지 위로 올라오기
  let postModules = document.querySelectorAll(".post-module");

  postModules.forEach(function (postModule) {
    let description = postModule.querySelector(".description");
    description.style.display = "none";
    description.style.maxHeight = "0";
    description.style.opacity = "0";

    postModule.addEventListener("mouseenter", function () {
      let description = this.querySelector(".description");

      description.style.display = "block";
      description.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
      description.style.maxHeight = description.scrollHeight + "px";
      description.style.opacity = "1";
      description.style.overflow = "hidden";
    });

    postModule.addEventListener("mouseleave", function () {
      let description = this.querySelector(".description");
      description.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
      description.style.maxHeight = "0";
      description.style.opacity = "0";
      description.style.overflow = "hidden";
      setTimeout(function () {
        description.style.display = "none";
      }, 300); // transition duration과 동일하게 설정
    });
  });

    // Open-source 섹션 타이틀 애니메이션 설정
	gsap.from(".open-source .main-tit", {
		scrollTrigger: {
		  trigger: ".open-source",
		  start: "top 80%", // open-source 섹션이 화면에 나타날 때 시작
		  toggleActions: "play none none reverse",
		},
		y: 50,
		opacity: 0,
		duration: 1,
		ease: "power3.out"
	  });

// 메인 컨택트 섹션의 텍스트를 개별 문자로 나누어 애니메이션을 적용
	function splitTextToSpans(element) {
		const text = element.textContent;
		element.innerHTML = ""; // 기존 텍스트 초기화
	
		// 각 문자를 span 태그로 감싸기
		text.split("").forEach((char) => {
		const span = document.createElement("span");
		span.textContent = char;
		element.appendChild(span);
		});
	}
	
	// 메인 컨택트 섹션의 animate-text 요소에 애니메이션 추가
	const animateText = document.querySelector(".animate-text");
	splitTextToSpans(animateText);
	
	gsap.from(".animate-text span", {
		scrollTrigger: {
		trigger: ".main-contact",
		start: "top 100%", // 스크롤이 섹션에 도달하면 애니메이션 시작
		toggleActions: "play none none none",
		},
		opacity: 0,
		y: 50, // 아래에서 위로 올라오도록 설정
		stagger: 0.08, // 문자 간의 애니메이션 간격
		duration: 0.4, // 각 문자 애니메이션 지속 시간
		ease: "power3.out",
	});

});
