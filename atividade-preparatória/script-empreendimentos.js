// FILTRO PÁGINA EMPREENDIMENTOS

const lotes = document.querySelectorAll('.lotes-empreendimentos')
 
function activePageEmpreendimentos(index) {
  lotes.forEach((lote) => {
    lote.classList.add('d-none')
  })
  lotes[index].classList.remove('d-none')
  console.log(index);
  
}

let activeEmpreendimento = document.querySelectorAll('.options-empreendimentos')

activeEmpreendimento.forEach((empre, index) => {
  empre.addEventListener('click', function() {
    activeEmpreendimento.forEach(empre => empre.classList.remove('active-empreendimentos'))
    empre.classList.add('active-empreendimentos')
    console.log(empre)
    activePageEmpreendimentos(index)
  })})