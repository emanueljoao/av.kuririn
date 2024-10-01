
function accordionFaleConosco() {

    console.log(accordion);

    
    const containerMain = accordion.querySelector('.item-accordion-fale-conosco')
    console.log(containerMain);
    
    const arrowIcon = containerMain.querySelector('.arrow-icon')
    console.log(arrowIcon);

}


document.querySelectorAll('.btn-text-click-accordion').forEach(accordion => {
    accordion.addEventListener('click', accordionFaleConosco);
});
