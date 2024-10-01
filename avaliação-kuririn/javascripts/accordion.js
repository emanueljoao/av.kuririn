// ACCORDION FOOTER
function accordionFooter(accordion) {
    
    const accordionContainer = accordion.currentTarget.closest('.listas-footer');
    
    const listAccordion = accordionContainer.querySelector(".ul-accordion-footer");
    
    listAccordion.classList.toggle("active");
    
    const btnAccordion = accordionContainer.querySelector(".btn-accordion")
    btnAccordion.classList.toggle("active");

    const arrowIcon = accordionContainer.querySelector('.arrow-icon');
    arrowIcon.classList.toggle('rotated');
}

document.querySelectorAll('.accordion-footer').forEach(accordion => {
    accordion.addEventListener('click', accordionFooter);
});

