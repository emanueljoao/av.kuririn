const sectionBusca = document.querySelector('.section-busca')
const fecharBusca = document.querySelector('.fechar-busca')
const iconBusca = document.querySelector('.icon-lupa-header')

function buscarPesquisa() {
    sectionBusca.classList.add('active')
    document.body.classList.add('active-overflow')
}

function fecharPesquisa() {
    sectionBusca.classList.remove('active')
    document.body.classList.remove('active-overflow')
}



iconBusca.addEventListener('click', buscarPesquisa)
fecharBusca.addEventListener('click', fecharPesquisa)
