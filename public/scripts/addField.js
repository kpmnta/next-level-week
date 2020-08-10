// Procurar o botão
document.querySelector('#add-time')

// Quando clicar no botão 
.addEventListener('click', cloneField)

// Executar - duplicar o campo 
function cloneField () {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // limpar os campos preenchidos 

    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo limpar 
    fields.forEach(function(field) {
        // pegar o field do momento e limpa
        field.value = ""
    })

    // Colocar na pag 
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

  


    

