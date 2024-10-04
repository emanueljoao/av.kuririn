const cards = document.querySelectorAll('.categoria-blog-option')
 
function activePageBlog(index) {
  cards.forEach((card) => {
    card.classList.add('d-none')
  })
  cards[index].classList.remove('d-none')
  
}

let activeFiltro = document.querySelectorAll('.btns-filters')

activeFiltro.forEach((one, index) => {
  one.addEventListener('click', function() {
    activeFiltro.forEach(one => one.classList.remove('active'))
    one.classList.add('active')
    console.log(one);
    
    activePageBlog(index)
  })})