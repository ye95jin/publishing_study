const ui = {
  init: function () {
    this.navigation();
    this.slider();
    this.parallax();
  },
  navigation() {
    let header = document.getElementById("header");

    let desktopFlag;

    function checkWindowSize() {
      let winw = window.innerWidth;

      if (winw > 1240) {
        desktopFlag = true;
      } else {
        desktopFlag = false;
      }

      if (header.classList.contains("menu-open")) {
        header.classList.remove("menu-open");
      }
    }

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);
  },
  slider() {
    const visualSwiper = new Swiper(".main-slider .swiper", {
      loop: true,
      speed: 2000,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: ".main-slider .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">0${index + 1}</span>`;
        }
      }
    });

    const prdSwiper = new Swiper(".open-source .swiper", {
      loop: true,
      speed: 2000,
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 20,
      autoplay: {
        delay: 2000
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1025: {
          slidesPerView: 4.5,
          spaceBetween: 50
        }
      }
    });
  },
  parallax() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      gsap.utils.toArray(".main-typo").forEach(function (mainTypo) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainTypo,
            scrub: 1,
            start: "top bottom"
          }
        });

        tl.to(mainTypo.querySelector("div:nth-child(1)"), {
          x: "-7%",
          duration: 1
        });

        tl.to(mainTypo.querySelector("div:nth-child(2)"), {
          x: "7%",
          duration: 1,
          delay: -1
        });
      });
    } else {
      gsap.utils.toArray(".main-typo").forEach(function (mainTypo) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainTypo,
            scrub: 1,
            start: "top bottom"
          }
        });

        tl.to(mainTypo.querySelector("div:nth-child(1)"), {
          x: "-20%",
          duration: 1
        });

        tl.to(mainTypo.querySelector("div:nth-child(2)"), {
          x: "20%",
          duration: 1,
          delay: -1
        });
      });
    }

  }
};
