// procurar o botão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)
// executar uma ação
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    // limpar cada campo
    fields.forEach(function(field) {
        // pegar o campo e limpar
        field.value = ""
    })
    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}