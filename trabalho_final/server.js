const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const logDir = './LOG';
const logFile = path.join(logDir, 'ALUNO.LOG');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/submit', (req, res) => {
    const { nome, idade, sexo, cidade, escolaridade } = req.body;
    const data = `Nome: ${nome}, Idade: ${idade}, Sexo: ${sexo}, Cidade: ${cidade}, Escolaridade: ${escolaridade}\n`;

    fs.appendFile(logFile, data, (err) => {
        if (err) {
            console.error('Erro ao salvar os dados:', err);
            res.status(500).send('Erro ao salvar os dados');
            return;
        }
        console.log('Dados salvos com sucesso.');
        res.send('OK, DADOS SALVOS');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});