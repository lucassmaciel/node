const http = require('http');

const servidor = http.createServer(function(req, res){
    console.log('servidor funcionando');
    res.end(`
        <html>
            <head>
                <title>
                    Página de teste
                </title>
            </head>
            <body>
                <h1>Codigo de resposta do servidor</h1>
                <p></p>
            </body>
        </html>
    `);
});
servidor.listen(3000)