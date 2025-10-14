const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);



const { getConnection } = require('./db'); // Importa a função de conexão do db.js

const port = 3000; // Escolha a porta que desejar

 // For parsing application/json
app.use(express.json()); 
    // For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 
    
/*
let estado = false;

let con = mysql.createConnection({
  host: "localhost",
  user: "sergi3607_node",
  password: "$fusca99+",
  database: 'sergi3607_base'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  estado = true;
});
*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1, b: "Sergio" }, null, 3));
});



app.get('/json1', (req, res) => {
  const myComplexArray = [
    { id: 1, name: 'Alice', cor: 'red'},
    { id: 2, name: 'Bob', cor: 'blue' }
    ];
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(myComplexArray, null, 3));
});


app.get('/j2', (req, res) => {
  const nomeDoUsuario = req.query.nome;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1, b: nomeDoUsuario }, null, 3));
});



server.listen(process.env.PORT , () => {
    console.log(`Servidor a correr em http://localhost:${process.env.PORT}`);
});
