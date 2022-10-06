import * as express from 'express';
// var que armazenam express e a porta de rede
const app = express();
const port = 3000
// app.listen deve ser executado por ultimo, ou seja, o codigo principal fica aqui 

app.get('/hello/', (request,response) => {
  response.send('Hello world! ');
});

app.get('/bsm/', (request,response) => {
  response.send('Mentalidades: Persistencia, Responsabilidade Pessoal, Orientação ao Futuro e Mentalidade de Crescimento'+
  '<br>Habilidades: Trablho em Equipe, Atenção aos Detalhes, Proatividade, Comunicação ');
});


app.get('/objetivo/', (request,response) => {
  response.send('Aprender');
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
  

})