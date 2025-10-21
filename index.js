
const express = require('express');

const app = express();

const port = 3000;
app.use(express.json()); //uso de parse json
app.use(express.urlencoded({extended: true}));

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST requests to the /submit-form endpoint
app.post('/submit-form', (req, res) => {
    const { input1, input2, input3,input4 } = req.body;

    console.log('Received form submission:');
    console.log('v1:', input1);
    console.log('v2:', input2);
    console.log('v3:', input3);
    console.log('v4:', input4);
    // coloque aqui o calculo da matriz inversa e do determinante 
    // e retorno o seu resultado.
 // Render the 'index.ejs' file and pass the calculated data
   res.render('resp', {
    num1: input1,
    num2: input2,
    result: input3
    });
    //res.send('Form submitted successfully!' );
});


var server = app.listen( port || process.env.PORT , () =>{
    console.log(`Servidor rodando em ${process.env.PORT || port}`)
}); 