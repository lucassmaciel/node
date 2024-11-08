const fs = require('fs')

fs.stat('exemplo_log.txt', (err, stats)=>
{
    if(err){
        console.error(err)
        return
    }
    console.log('tudo certo!!!')
})