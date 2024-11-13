const ui = {
  init: function () {
    this.slider();
  },
  slider() {
    new Swiper(".open-source .swiper", {
      loop: true,
      speed: 500,
      slidesPerView: 4.5,
      centeredSlides: true,
      spaceBetween: 50,
      autoplay: true
      // autoplay: {
      //   delay: 2000
      // }
      // breakpoints: {
      //   769: {
      //     slidesPerView: 3,
      //     spaceBetween: 20
      //   },
      // }
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
