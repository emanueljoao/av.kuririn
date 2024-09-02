//SELETORES FUNÇÕES
const menu = document.querySelector('.menu')
const menuMain = document.querySelector('.conteudo-menu')
const menuMobile = document.querySelector('.menu-mobile .menu')
const header = document.querySelector('nav')

// FUNÇÕES
function functionMenu() {
    menuMain.classList.toggle('active')
    menu.classList.toggle('active')
    menuMobile.classList.toggle('active')
    header.classList.toggle('active')
}


// EVENTOS
menu.addEventListener('click', functionMenu)
menuMobile.addEventListener('click', functionMenu)
// SWIPER - SECTION ULTIMOS LOTES
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    pagination: {
        el: ".swiper-pagination-custom",
      },
});

// SWIPER - SECTION NOVIDADES DO BLOG

var swiperBlog = new Swiper(".mySwiperBlog", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-blog",
    prevEl: ".swiper-button-prev-blog",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    }, 
}});

// SWIPER - SECTION PRÓXIMOS LANCAMENTOS 

var swiperNextLance = new Swiper(".mySwiperLancamentos", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-prox-lance",
    prevEl: ".swiper-button-prev-prox-lance",
  }, 
});