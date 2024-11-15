window.addEventListener("load", function () {
  const lenis = new Lenis();
  lenisAnimation();
  ui.init();

  // header 요소 선택
  let header = document.querySelector("header");

  // 윈도우 로드 시 스크롤을 0으로 이동
  // setTimeout(function () {
  //   gsap.to(window, { scrollTo: 0, duration: 0.5 });
  // }, 200);

  const navItems = document.querySelectorAll(".gnb-wrap ul li a");
  const sections = document.querySelectorAll("section");

  // Lenis 루프 제어 함수
  function toggleLenis(enable) {
    if (enable) {
      console.log("Lenis 루프 재시작");
      lenis.start();
    } else {
      console.log("Lenis 루프 일시 중지");
      lenis.stop();
      lenis.raf(); 
    }
  }

  // 각 네비게이션 항목에 클릭 이벤트 리스너 추가
  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", (event) => {
      event.preventDefault();
      const section = sections[index];

      // 특정 섹션의 경우 부모 .pin-spacer로 스크롤
      const isPinnedSection = ["ABOUT", "SKILLS", "PROJECTS"].includes(navItem.textContent);
      const scrollTarget = isPinnedSection ? section.closest(".pin-spacer") || section : section;

      console.log(`nav ${index} 클릭됨 - 이동 대상 섹션:`, section);

      // 진행 중인 gsap 애니메이션 중단
      gsap.killTweensOf(window);
      console.log("기존 gsap 애니메이션 중단됨");

      // Lenis 루프 비활성화
      toggleLenis(false);

      // 애니메이션을 정확히 시작하기 위해 requestAnimationFrame 사용
      requestAnimationFrame(() => {
        // gsap를 이용해 지정된 섹션으로 스크롤
        gsap.to(window, {
          scrollTo: { y: scrollTarget, autoKill: true },
          duration: 1,
          ease: "power3.out",
          onStart: () => {
            console.log("gsap 스크롤 애니메이션 시작 - 이동 대상:", scrollTarget);
          },
          onComplete: () => {
            console.log("gsap 스크롤 애니메이션 완료");
            toggleLenis(true); // Lenis 루프 재시작
          }
        });
      });
    });
  });

  // 최적화된 ScrollTrigger 로직
  const createSectionTriggers = () => {
    // 각 섹션에 대해 한 번만 ScrollTrigger 생성
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveNav(index),
        onEnterBack: () => setActiveNav(index),
        onToggle: ({ isActive }) => {
          if (isActive) setActiveNav(index);
        }
      });
    });
  };

  // 컨테이너에 대한 메인 ScrollTrigger
  ScrollTrigger.create({
    trigger: ".container",
    start: "top center",
    end: "bottom bottom",
    onEnter: createSectionTriggers
  });

  // 현재 활성화된 네비게이션 항목의 클래스를 설정하는 함수
  function setActiveNav(index) {
    if (index < 0 || index >= navItems.length) return;

    navItems.forEach((item) => item.classList.remove("active"));
    navItems[index].classList.add("active");
  }
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
  .from(".particle", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  })
  .from(".mini-text", {
    x: "-100%", 
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "<"); 

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
        // pinSpacing: false,
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
      start: "top 50%",
      toggleActions: "play none none reverse"
    },
    y: 50, 
    opacity: 0, 
    duration: 1, 
    ease: "power3.out"
  });

  gsap.from(".sc-about .title p", {
    scrollTrigger: {
      trigger: ".sc-about",
      start: "top 50%",
      toggleActions: "play none none reverse"
    },
    y: 50, 
    opacity: 0, 
    duration: 1, 
    delay: 0.3, 
    ease: "power3.out"
  });

  // 스킬 섹션 타이틀 애니메이션 설정
  gsap.from(".sc-skills .title h2", {
    scrollTrigger: {
      trigger: ".sc-skills",
      start: "top 60%",
      toggleActions: "play none none reverse"
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
        y: -contentsHeight
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
      }, 300); 
    });
  });

  // Open-source 섹션 타이틀 애니메이션 설정
  gsap.from(".open-source .main-tit", {
    scrollTrigger: {
      trigger: ".open-source",
      start: "top 80%", 
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // 메인 컨택트 섹션의 텍스트를 개별 문자로 나누어 애니메이션을 적용
  function splitTextToSpans(element) {
    const text = element.textContent;
    element.innerHTML = ""; 

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

  gsap.registerPlugin(ScrollTrigger);

  // 텍스트 애니메이션
  gsap.fromTo(
    ".animate-text span",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".main-contact",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play none none reverse"
      },
      stagger: 0.08,
      ease: "elastic.out(1, 0.3)"
    }
  );

  // 텍스트 애니메이션이 끝난 후 컨택트 아이콘 등장 애니메이션 추가
  gsap.fromTo(
    ".contact-icon",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.3,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: ".main-contact",
        start: "top 40%",
        toggleActions: "play none none reverse"
      }
    }
  );
		// Get the button
		let topButton = document.getElementById("topButton");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				topButton.style.display = "block";
			} else {
				topButton.style.display = "none";
			}
		};

		// When the user clicks on the button, scroll to the top of the document
		topButton.onclick = function() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		};
});
