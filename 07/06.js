const fs = require('fs')

const folderName = 'pasta1'

try{
    fs.mkdirSync(folderName)
    console.log('pasta criada com sucesso!')
} catch(err){
    if(err.code === 'EEXIST'){
        console.log('pasta já existe')
}}
