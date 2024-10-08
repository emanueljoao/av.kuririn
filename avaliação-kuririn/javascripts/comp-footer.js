class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!--################# FOOTER ####################-->

            <footer>

                <!---------------------- FOOTER PRINCIPAL ACIMA DE 1200px ------------------->

                <!-- SECTION - LISTAS FOOTER -->

                <section class="lista-accordion">
                    <div class="container-xl">
                        <div class="lista-ancoras-footer d-xl-flex d-none justify-content-between">

                            <div class="lista-institucional title-list">
                                <p>INSTITUCIONAL</p>
                                <ul>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Sobre</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">MVV</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">História</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Nossa Equipe</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Grupo TrenZão</a></li>
                                </ul>
                            </div>

                            <div class="lista-produtos-servicos title-list">
                                <p>PRODUTOS E SERVIÇOS</p>
                                <ul>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">O que Fazemos</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Benefícios</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Nossa Experiência</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Produtos</a></li>
                                </ul>
                            </div>

                            <div class="lista-segmentos title-list">
                                <p>SEGMENTOS E SETORES</p>
                                <ul>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Segmentos e Setores</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Cases de Sucesso</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Modelo de Sustentabilidade</a></li>
                                </ul>
                            </div>


                            <div class="ancoras-blog-fale d-flex flex-column">
                                <a class="title-list" href="#">NOVIDADES DO BLOG</a>
                                <a class="title-list" href="#">FALE CONOSCO</a>
                            </div>
                        </div>
                    </div>
                </section>

                <hr class="lines-footer">

                <!---------------------- FOOTER - RESPONSIVO ABAIXO/ATÉ 1200px ---------------->

                <section class="footer-lista-accordion d-xl-none d-block">
                    <div class="section-footer-lista-accordion container-fluid">
                        <div class="conteudo-section-footer-lista-accordion container-xl">

                            <div class="listas-footer lista-institucional-accordion title-list">

                                <div class="accordion-footer d-flex">
                                    <div class="btn-accordion d-flex justify-content-center align-items-center">
                                        <svg class="arrow-icon" width="11" height="7" viewBox="0 0 11 7" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.90918 1.09094L5.27282 5.45458L9.63645 1.09094" stroke="white"
                                                stroke-opacity="0.4" stroke-linecap="square" />
                                        </svg>
                                    </div>
                                    <p>INSTITUCIONAL</p>
                                </div>

                                <ul class="ul-accordion-footer list-unstyled">
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Sobre</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">MVV</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">História</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Nossa Equipe</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Grupo TrenZão</a></li>
                                </ul>
                            </div>

                            <hr class="lines-footer">

                            <div class="listas-footer lista-produtos-servicos title-list">
                                <div class="accordion-footer d-flex">
                                    <div class="btn-accordion d-flex justify-content-center align-items-center">
                                        <svg class="arrow-icon" width="11" height="7" viewBox="0 0 11 7" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.90918 1.09094L5.27282 5.45458L9.63645 1.09094" stroke="white"
                                                stroke-opacity="0.4" stroke-linecap="square" />
                                        </svg>
                                    </div>
                                    <p>PRODUTOS E SERVIÇOS</p>
                                </div>

                                <ul class="ul-accordion-footer list-unstyled">
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">O que Fazemos</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Benefícios</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Nossa Experiência</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Produtos</a></li>
                                </ul>

                            </div>

                            <hr class="lines-footer">

                            <div class="listas-footer lista-segmentos title-list">

                                <div class="accordion-footer d-flex">
                                    <div class="btn-accordion d-flex justify-content-center align-items-center">
                                        <svg class="arrow-icon" width="11" height="7" viewBox="0 0 11 7" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.90918 1.09094L5.27282 5.45458L9.63645 1.09094" stroke="white"
                                                stroke-opacity="0.4" stroke-linecap="square" />
                                        </svg>
                                    </div>
                                    <p>SEGMENTOS E SETORES</p>
                                </div>

                                <ul class="ul-accordion-footer list-unstyled">
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Segmentos e Setores</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Cases de Sucesso</a></li>
                                    <li><img src="icons-svgs/arrow-lista-footer.svg" alt="icone de uma ponta de uma flecha"><a
                                            class="ancor-list-footer" href="#">Modelo de Sustentabilidade</a></li>
                                </ul>
                            </div>

                            <hr class="lines-footer">

                            <div class="ancoras-fale-blog"><a class="title-list" href="#">NOVIDADES DO BLOG</a></div>

                            <hr class="lines-footer">

                            <div class="ancoras-fale-blog"><a class="title-list" href="#">FALE CONOSCO</a></div>

                            <hr class="lines-footer">

                        </div>
                    </div>
                </section>

                <!-- SECTION - SOCIAL MEDIA FOOTER -->

                <section class="section-social-media-footer">
                    <div
                        class="conteudo-section-social-media-footer container-xl d-flex justify-content-md-between justify-content-center align-items-center">

                        <div class="div-redes-sociais-footer d-flex">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7845 19.7904V19.7894H19.7896V12.5318C19.7896 8.98155 19.0254 6.24609 14.8742 6.24609C12.8788 6.24609 11.54 7.3412 10.9932 8.37911H10.9355V6.57746H6.99976V19.7894H11.0978V13.2476C11.0978 11.5253 11.4245 9.8597 13.5575 9.8597C15.6596 9.8597 15.6905 11.8252 15.6905 13.3584V19.7904H19.7845Z"
                                    fill="#353597" />
                                <path d="M4.42966 6.57715H0.326477V19.7891H4.42966V6.57715Z" fill="#353597" />
                                <path
                                    d="M2.37626 0C1.0647 0 0 1.0647 0 2.37626C0 3.68782 1.0647 4.77468 2.37626 4.77468C3.68781 4.77468 4.75252 3.68782 4.75252 2.37626C4.752 1.0647 3.6873 0 2.37626 0Z"
                                    fill="#353597" />
                            </svg>

                            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.7897 6.53125H7.03967V4.15625C7.03967 3.5009 7.59983 2.96875 8.28967 2.96875H9.53967V0H7.03967C4.96858 0 3.28967 1.59496 3.28967 3.5625V6.53125H0.789673V9.5H3.28967V19H7.03967V9.5H9.53967L10.7897 6.53125Z"
                                    fill="#353597" />
                            </svg>

                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.2085 1H7.34368C3.72464 1 0.789673 4.02694 0.789673 7.75938V15.8706C0.789673 19.6031 3.72464 22.63 7.34368 22.63H15.2085C18.8275 22.63 21.7625 19.6031 21.7625 15.8706V7.75938C21.7625 4.02694 18.8275 1 15.2085 1ZM19.7963 15.8706C19.7963 18.4798 17.7383 20.6022 15.2085 20.6022H7.34368C4.81383 20.6022 2.75588 18.4798 2.75588 15.8706V7.75938C2.75588 5.15026 4.81383 3.02782 7.34368 3.02782H15.2085C17.7383 3.02782 19.7963 5.15026 19.7963 7.75938V15.8706Z"
                                    fill="#353597" />
                                <path
                                    d="M11.2767 6.4077C8.38108 6.4077 6.03352 8.82882 6.03352 11.8152C6.03352 14.8016 8.38108 17.2227 11.2767 17.2227C14.1724 17.2227 16.5199 14.8016 16.5199 11.8152C16.5199 8.82882 14.1724 6.4077 11.2767 6.4077ZM11.2767 15.1949C9.47028 15.1949 7.99972 13.6783 7.99972 11.8152C7.99972 9.95088 9.47028 8.43551 11.2767 8.43551C13.0832 8.43551 14.5537 9.95088 14.5537 11.8152C14.5537 13.6783 13.0832 15.1949 11.2767 15.1949Z"
                                    fill="#353597" />
                                <path
                                    d="M17.0437 6.40818C17.3332 6.40818 17.568 6.16608 17.568 5.86742C17.568 5.56877 17.3332 5.32667 17.0437 5.32667C16.7541 5.32667 16.5193 5.56877 16.5193 5.86742C16.5193 6.16608 16.7541 6.40818 17.0437 6.40818Z"
                                    fill="#353597" />
                                <path
                                    d="M15.2085 1H7.34368C3.72464 1 0.789673 4.02694 0.789673 7.75938V15.8706C0.789673 19.6031 3.72464 22.63 7.34368 22.63H15.2085C18.8275 22.63 21.7625 19.6031 21.7625 15.8706V7.75938C21.7625 4.02694 18.8275 1 15.2085 1ZM19.7963 15.8706C19.7963 18.4798 17.7383 20.6022 15.2085 20.6022H7.34368C4.81383 20.6022 2.75588 18.4798 2.75588 15.8706V7.75938C2.75588 5.15026 4.81383 3.02782 7.34368 3.02782H15.2085C17.7383 3.02782 19.7963 5.15026 19.7963 7.75938V15.8706Z"
                                    stroke="#353597" stroke-width="0.5" />
                                <path
                                    d="M11.2767 6.4077C8.38108 6.4077 6.03352 8.82882 6.03352 11.8152C6.03352 14.8016 8.38108 17.2227 11.2767 17.2227C14.1724 17.2227 16.5199 14.8016 16.5199 11.8152C16.5199 8.82882 14.1724 6.4077 11.2767 6.4077ZM11.2767 15.1949C9.47028 15.1949 7.99972 13.6783 7.99972 11.8152C7.99972 9.95088 9.47028 8.43551 11.2767 8.43551C13.0832 8.43551 14.5537 9.95088 14.5537 11.8152C14.5537 13.6783 13.0832 15.1949 11.2767 15.1949Z"
                                    stroke="#353597" stroke-width="0.5" />
                                <path
                                    d="M17.0437 6.40818C17.3332 6.40818 17.568 6.16608 17.568 5.86742C17.568 5.56877 17.3332 5.32667 17.0437 5.32667C16.7541 5.32667 16.5193 5.56877 16.5193 5.86742C16.5193 6.16608 16.7541 6.40818 17.0437 6.40818Z"
                                    stroke="#353597" stroke-width="0.5" />
                            </svg>
                        </div>

                        <div class="up-page d-lg-flex d-none">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7854 8.82617L8.3547 1.39547L0.923994 8.82617" stroke="white"
                                    stroke-linecap="square" />
                                <path d="M8.35498 17L8.35498 2.51013" stroke="white" stroke-linecap="square"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>

                    </div>
                </section>

                <hr class="lines-footer">

                <!-- SECTION - POLITICAS DE PRIVACIDADE -->

                <section class="section-politica-privacidade">
                    <div
                        class="conteudo-section-politica-privacidade container-xl d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-start">

                        <p class="cookies d-md-block d-none"><a href="#">Politica Cookies</a> | <a href="#">Politica
                                Privacidade</a></p>

                        <p class="cookies d-md-none d-block"><a href="#">Politica Cookies</a> <br> <a href="#">Politica
                                Privacidade</a></p>

                        <div class="up-page d-lg-none d-flex align-self-end">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7854 8.82617L8.3547 1.39547L0.923994 8.82617" stroke="white"
                                    stroke-linecap="square" />
                                <path d="M8.35498 17L8.35498 2.51013" stroke="white" stroke-linecap="square"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>

                        <p class="direitos-reservados">Todos os Direitos Reservados &copy; 2021 - <a href="#">Grupo TrenZão</a>
                        </p>

                    </div>
                </section>

                <!---------------------- FOOTER - RESPONSIVO ABAIXO/ATÉ 1200px ---------------->



            </footer>
        `;
    }
}

customElements.define('main-footer', footer)