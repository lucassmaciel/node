const fs = require('fs');
const path = './LOG';

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
    console.log('Diretório LOG criado.');
} else {
    console.log('Diretório LOG já existe.');
}