const fs = require('fs')

try{
    const fd = fs.readFileSync('exemplo_log.txt', 'utf-8')
    console.log(fd)
} catch(err)
{
    console.error(err)
}