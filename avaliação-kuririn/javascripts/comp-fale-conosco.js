class sectionFaleConosco extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="section-fale-conosco">
                <div class="container-section-fale-conosco container-fluid">
                    <div class="conteudo-section-fale-conosco container-xl d-flex flex-column align-items-center">
                        <h2>FALE <strong>CONOSCO</strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus, quam eu interdum
                            sodales, nulla elit imperdiet orci, et sollicitudin</p>
                        <button class="btn-fale-conosco oranges-btns">
                            <svg class="d-md-block d-none" width="65" height="18" viewBox="0 0 65 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63 9H1" stroke="white" stroke-linecap="square" stroke-linejoin="round" />
                                <path d="M56 1L64 9L56 17" stroke="white" stroke-linecap="square" stroke-linejoin="round" />
                            </svg>
                            Entre em Contato
                        </button>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define('section-fale-conosco', sectionFaleConosco)
