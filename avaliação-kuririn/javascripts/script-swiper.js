// SWIPER - SECTION BANNER MOBILIDADE
var swiper = new Swiper(".mySwiperMobilidade", {
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    pagination: {
        el: ".swiper-pagination-custom",
        clickable: true,
      },
});


// SWIPER - SECTION PRODUTOS E SERVIÇOS
var swiperProdutosServicos = new Swiper(".mySwiperProdutosServicos", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  breakpoints: {

    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView:  2.5,
    },
  }
});

// SWIPER - SECTION SEGMENTOS E SETORES
var swiperSegmentosSetores = new Swiper(".myswiperSegmentosSetores", {
  slidesPerView: 1,
  navigation: {
      nextEl:".swiper-button-next-custom",
      prevEl:".swiper-button-prev-custom",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView:3,
    },
  }
});

// SWIPER - SECTION NOVIDADES DO BLOG
var swiperNovidadesDoBlog = new Swiper(".myswiperNovidadesBlog", {
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl:".swiper-button-next-custom",
    prevEl:".swiper-button-prev-custom",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1200: {
      slidesPerView:3,
      spaceBetween: 30,
    },
  }
});








