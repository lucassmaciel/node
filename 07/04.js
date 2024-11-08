const fs = require('fs')

const conteudo = 'aqui um texto qualquer para ser inserido no documento'

fs.writeFile('texto_aula.txt', conteudo,  err =>
{
    if(err){
        console.error(err)
        return
    }
    console.log('arquivo criado com sucesso!')
})
