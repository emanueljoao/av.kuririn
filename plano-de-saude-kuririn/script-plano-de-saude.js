const hamMenu = document.querySelector('.menu-header')
const menuApperance = document.querySelector('.menu')

function menu() {
    console.log (menuApperance)
    if (menu.classList.contains('d-none'))
        menuApperance.classList.remove('d-none')
        menuApperance.classList.add('.d-flex')  
}

hamMenu.addEventListener('click', menu)
