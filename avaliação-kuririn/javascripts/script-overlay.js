let overlay = document.querySelectorAll('.imagem-ampliada')
let divOverlay = document.getElementById('overlay');
let section = document.querySelector('.tipos-vagoes')

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
console.log(divOverlay);
