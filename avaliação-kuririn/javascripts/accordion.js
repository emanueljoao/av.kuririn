function accordionFooter(event) {
    // Seleciona o contêiner pai mais próximo
    const accordionContainer = event.currentTarget.closest('.listas-footer');
    
    const listAccordion = accordionContainer.querySelector(".ul-accordion-footer");
    
    listAccordion.classList.toggle("active");
    
    const arrowIcon = accordionContainer.querySelector('.arrow-icon');
    arrowIcon.classList.toggle('rotated');
}

document.querySelectorAll('.accordion-footer').forEach(accordion => {
    accordion.addEventListener('click', accordionFooter);
});
