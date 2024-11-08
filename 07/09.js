const fs = require('fs')

fs.readFile('dados.csv', 'utf-8', (err, data) => {
    if(err){
        console.error('erro ao ler arquivo')
        return
    }
    console.log(data)
})