window.addEventListener("load", function () {
  // lenisAnimation 함수 호출
  lenisAnimation();

  // header 요소 선택
  let header = document.querySelector("header");

  // 윈도우 로드 시 스크롤을 0으로 이동
  //   setTimeout(function () {
  //     gsap.to(window, { scrollTo: 0, duration: 0.5 });
  //   }, 200);

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
});
