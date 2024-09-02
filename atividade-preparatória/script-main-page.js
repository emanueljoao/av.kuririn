// //SELETORES FUNÇÕES
// const menu = document.querySelector('.menu')
// const menuMain = document.querySelector('.conteudo-menu')
// const menuMobile = document.querySelector('.menu-mobile .menu')
// const header = document.querySelector('nav')

// // FUNÇÕES
// function functionMenu() {
//     menuMain.classList.toggle('active')
//     menu.classList.toggle('active')
//     menuMobile.classList.toggle('active')
//     header.classList.toggle('active')
// }


// // EVENTOS
// menu.addEventListener('click', functionMenu)
// menuMobile.addEventListener('click', functionMenu)

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
      },
});