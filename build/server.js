"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// var que armazenam express e a porta de rede
var app = express();
var port = 3000;
// app.listen deve ser executado por ultimo, ou seja, o codigo principal fica aqui 
app.get('/hello/', function (request, response) {
    response.send('Hello world! ');
});
app.get('/bsm/', function (request, response) {
    response.send('Mentalidades: Persistencia, Responsabilidade Pessoal, Orientação ao Futuro e Mentalidade de Crescimento' +
        'Habilidades: Trablho em Equipe, Atenção aos Detalhes, Proatividade, Comunicação ');
});
app.get('/objetivo/', function (request, response) {
    response.send('Aprender');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port));
});
