//SELETORES FUNÇÕES
const menu = document.querySelector('.menu')
const menuMain = document.querySelector('.conteudo-menu')


// FUNÇÕES
function functionMenu() {
    menuMain.classList.toggle('active')
    menu.classList.toggle('active')
}


// EVENTOS
menu.addEventListener('click', functionMenu())