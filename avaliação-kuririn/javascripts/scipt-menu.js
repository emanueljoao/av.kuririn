// MENU
const menu = document.querySelector('.menu')
const menuMain = document.querySelector('.conteudo-menu')

// MENU FUNÇÃO
function functionMenu() {
    menuMain.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('active-overflow')
}

// EVENTO MENU
menu.addEventListener('click', functionMenu)
