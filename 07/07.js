const fs = require('fs')

fs.rename('pasta1', 'pasta2', (err) => {
    if(err){
        console.error('erro ao renomear pasta')
        return
    }
    console.log('pasta renomeada com sucesso!')

})