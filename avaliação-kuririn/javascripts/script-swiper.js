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










