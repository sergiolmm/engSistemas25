
const express = require('express');

const app = express();

const port = 3000;
app.use(express.json()); //uso de parse json
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen( port || process.env.PORT , () =>{
    console.log(`Servidor rodando em ${process.env.PORT || port}`)
}); 