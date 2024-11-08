const fs = require('fs')
const data = `
id, nome, idade
1, joao, 45
2, maria, 20
3, fernanda, 18
4, jose, 29
`;

fs.writeFile('dados.csv', data, (err) => {
    if(err){
        console.error('erro ao escrever arquivo')
        return
    }
    console.log('arquivo escrito com sucesso')
})