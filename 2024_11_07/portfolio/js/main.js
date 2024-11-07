
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


//   // 메인 스타 애니메이션 (페이지 로드 시 바로 실행)
//   gsap.to(".img-box img", {
//     y: -20,           // 위로 살짝 이동
//     duration: 0.5,    // 애니메이션 지속 시간
//     ease: "power2.out",
//     yoyo: true,       // 원래 위치로 돌아옴
//     repeat: 1,        // 한 번만 반복
//   });

  // 텍스트 애니메이션
  const textRev = gsap.timeline({ delay: 0.5 });

  textRev.from(".sc-intro .text-box .text", {
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(".sc-intro .text-box .main-text", {
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  }, "-=0.7")
  .from(".sc-intro .text-box .mini-text", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  }, "-=0.5")
  .from(".particle", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
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
        scrub: 1.5,
      },
    });
  });


	  // 스크롤 아이콘 애니메이션
	  gsap.to(".scroll-icon", {
		y: -8, // 아이콘이 위로 살짝 이동
		duration: 0.4,
		ease: "power1.inOut",
		yoyo: true,
		repeat: -1, // 무한 반복
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
  document.querySelector(".description").style.display = "none";
  document.querySelector(".description").style.maxHeight = "0";
  document.querySelector(".description").style.opacity = "0";

  postModules.forEach(function (postModule) {
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
});

