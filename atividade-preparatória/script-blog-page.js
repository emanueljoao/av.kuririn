// FILTRO PÁGINA BLOG

const noticia = document.querySelectorAll('.categoria-blog-option')
 
function activePageEmpreendimentos(index) {
  noticia.forEach((note) => {
    note.classList.add('d-none')
  })
  noticia[index].classList.remove('d-none')
  
}

let activeNoticia = document.querySelectorAll('.options-empreendimentos')

activeNoticia.forEach((news, index) => {
  news.addEventListener('click', function() {
    activeNoticia.forEach(news => news.classList.remove('active-empreendimentos'))
    news.classList.add('active-empreendimentos')
    activePageEmpreendimentos(index)
  })})