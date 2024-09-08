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
  
//#################################################### ENFASE DA IMAGEM ##########################################################

// GALERIA DE IMAGENS

let overlay = document.querySelectorAll('.imagem-da-galeria')
let divOverlay = document.getElementById('overlay');
let section = document.querySelector('.section-galeria-imagens')

overlay.forEach((over) => {
  over.addEventListener('click', function() {

    let imagemAmpliada = over.querySelector('img')
    imagemClonada = imagemAmpliada.cloneNode()

    divOverlay.innerHTML = ''
    divOverlay.appendChild(imagemClonada)

    divOverlay.style.display = 'flex'
    section.classList.add('blur')
    document.body.classList.add('blur-hidden')
    
  })})
  
function finishOverlay() {
    
    divOverlay.style.display = 'none'
    section.classList.remove('blur')
    document.body.classList.remove('blur-hidden')
    console.log(divOverlay)

}

divOverlay.addEventListener('click', finishOverlay)

  
  
  
//   imagemAmpliada.src = imagem.src;
//   overlay.forEach(swiper => swiper.classList.remove('active'))
//   swiper.classList.add('active')
//   console.log(swiper)
//   activeSwiper(index)

// function enfocarImagem(imagem) {
//   // Pega o elemento overlay e a imagem ampliada
  
//   // Define a fonte da imagem ampliada como a imagem clicada

//   // Exibe o overlay e desfoca o container (não o body)
//   overlay.style.display = 'flex';
//   document.querySelector('.container').classList.add('blur');
  
//   // Evita rolagem da página quando o overlay está ativo
//   document.body.classList.add('no-scroll');
// }

// function fecharEnfase() {
//   // Esconde o overlay e remove o desfoque
//   let overlay = document.getElementById('overlay');
//   overlay.style.display = 'none';
//   document.querySelector('.container').classList.remove('blur');
  
//   // Permite rolagem novamente
//   document.body.classList.remove('no-scroll');
// }


