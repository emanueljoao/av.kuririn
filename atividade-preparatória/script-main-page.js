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
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next-prox-lance",
    prevEl: ".swiper-button-prev-prox-lance",
  }, 
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView:3,
      spaceBetween: 30,
    },  
}});


// FILTRO - SECTION ENCONTRE SEUS LOTEAMENTOS

const obras = document.querySelectorAll('.obras')
 
function activeSwiper(index) {
  obras.forEach((obra) => {
    obra.classList.add('d-none')
  })
  obras[index].classList.remove('d-none')
  console.log(index);
  
}

let swipersActives = document.querySelectorAll('.options-filtro')
// let lastSwiperActive = swipersActives[0]

swipersActives.forEach((swiper, index) => {
  swiper.addEventListener('click', function() {
    swipersActives.forEach(swiper => swiper.classList.remove('active'))
    swiper.classList.add('active')
    console.log(swiper)
    activeSwiper(index)
  })})

// SWIPERS - SECTIONS ENCONTRE SEUS LOTEAMENTOS

// SWIPER - OBRAS CONCLUIDAS

var swiperObrasConluidas = new Swiper(".mySwiperObrasConcluidas", {
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next-encontre-lotes",
    prevEl: ".swiper-button-prev-encontre-lotes",
  }, 
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView:3,
      spaceBetween: 30,
    },  
}});

// SWIPER - OBRAS EM ANDAMENTO

var swiperObrasEmAndamento = new Swiper(".mySwiperObrasAndamento", {
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next-encontre-lotes",
    prevEl: ".swiper-button-prev-encontre-lotes",
  }, 
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView:3,
      spaceBetween: 30,
    },  
}});

// SWIPER - TODAS AS OBRAS 

var swiperTodasObras = new Swiper(".mySwiperTodasObras", {
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next-encontre-lotes",
    prevEl: ".swiper-button-prev-encontre-lotes",
  }, 
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView:3,
      spaceBetween: 30,
    },  
}});


