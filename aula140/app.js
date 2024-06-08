var http = require('http');
var PORT = 2024;
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.writeHead(200, { 'Content-Type':'application/json'});

    let numero = {
        temperatura: Math.round(Math.random() * 10),
        nivel: Math.round(Math.random() * 10),
        pressao: Math.round(Math.random() * 10)
    };

    res.end(JSON.stringify(numero));
}).listen(PORT,()=>{console.log("Servidor Rodando")});