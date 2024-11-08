const fs = require('fs')

const conteudo = 'aqui um texto qualquer para ser inserido no documento'

try{
    fs.writeFileSync('texto_aula.txt', conteudo)
} catch(err){
    console.error(err)
    return
}
console.log('arquivo criado com sucesso!')

