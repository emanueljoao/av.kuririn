//######################################################## LOTEAMENTO PAGE #########################################################

// SWIPER - GALERIA DE IMAGENS

var swiperGaleryImage = new Swiper(".mySwiperLoteamentoPage", {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
        nextEl: ".swiper-button-next-prox-galery",
        prevEl: ".swiper-button-prev-prox-galery",
    }, 
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView:3,
        spaceBetween: 30,
      },  
  }});
  