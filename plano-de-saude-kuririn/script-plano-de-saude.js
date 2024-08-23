//################### SCRIPT----MENU #########################

const menu = document.querySelector('.menu-header')
menu.addEventListener('click', menuApperance)

function menuApperance() {
    var menuElement = document.querySelector('.menu');
    menuElement.classList.toggle('d-none');
    let iconeX = document.querySelector('.img-x')
    iconeX.classList.toggle('d-block')
}

//####################### FASES-SECTIONS-AVANÇAR ########################

const btnHome = document.querySelector('#btn-avancar-home')
btnHome.addEventListener('click', avancarSectionSelection)

function avancarSectionSelection() {
    const sectionHome = document.querySelector('section.section-home')
    sectionHome.classList.toggle('d-none')

    const sectionSelection = document.querySelector('section.section-selecione-especialidade')
    sectionSelection.classList.remove('d-none')
}

//----------------------------------- AVANÇAR DA PÁGINA 2 PARA 3 -------------------------------------------

const btnAvancarPageTwo = document.querySelector('#btn-avancar-pagina-dois')
btnAvancarPageTwo.addEventListener('click', avancedPageProfessional)

function avancedPageProfessional() {
    const selectSectionSelectionAgainTwo = document.querySelector('.section-selecione-especialidade')
    selectSectionSelectionAgainTwo.classList.toggle('d-none')
    
    const sectionProfessionalAgain = document.querySelector('.section-selecione-professional')
    sectionProfessionalAgain.classList.remove('d-none')
}


//---------------------------------------------------- AVANÇAR DA PÁGINA 3 PARA 4 -----------------------------------------

const btnAvancarPageThree = document.querySelector('#btn-avancar-pagina-tres')
btnAvancarPageThree.addEventListener('click', avancedPageDataHour)

function avancedPageDataHour() {
    const selectSectionProfessionalAgainTwo = document.querySelector('.section-selecione-professional')
    selectSectionProfessionalAgainTwo.classList.toggle('d-none')
    
    const sectionDataHourAgain = document.querySelector('.section-data-hora')
    sectionDataHourAgain.classList.remove('d-none')
}


//############################### FASES SECTIONS VOLTAR ########################################

const backPageOfTwo = document.querySelector('#btn-voltar-pagina-tres')
backPageOfTwo.addEventListener('click', voltarParaSectionSelection)

function voltarParaSectionSelection() {
    const sectionSelectProfessional = document.querySelector('.section-selecione-professional')
    sectionSelectProfessional.classList.toggle('d-none')

    const sectionSelectionButBack = document.querySelector('.section-selecione-especialidade')
    sectionSelectionButBack.classList.remove('d-none')
}


// ------------------------------------------ SECTION VOLTAR -------------------------------------------------

const backPageOfThree = document.querySelector('#btn-voltar-pagina-quatro')
backPageOfThree.addEventListener('click', voltarParaSectionProfessional)

function voltarParaSectionProfessional() {
    const sectionSelectDataHourButBack = document.querySelector('.section-data-hora')
    sectionSelectDataHourButBack.classList.toggle('d-none')

    const sectionProfessionalButBack = document.querySelector('.section-selecione-professional')
    sectionProfessionalButBack.classList.remove('d-none')
}






















