const ui = {
  init: function () {
    this.slider();
  },
  slider() {
    new Swiper(".open-source .swiper", {
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

    function setSlideBackgrounds() {
      document.querySelectorAll(".swiper-slide.card").forEach((card, index) => {
        const imageUrl = `../images/open-source/project${(index % 5) + 1}.png`;
        card.style.setProperty("--background-image", `url(${imageUrl})`);
      });
    }

    setSlideBackgrounds();
  }
};
