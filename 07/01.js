const fs = require('fs')

fs.readFile('exemplo_log.txt', 'utf-8', (err, data)=>
{
    if (err){
        console.error(err)
        return
    }
    console.log(data)
})