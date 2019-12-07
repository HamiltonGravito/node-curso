var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//Armazena o Aplicativo Express
var app = express();
//Listen com retorno assim que o app for ativado porta
app.listen(3000, () => {
    console.log("App iniciado no porta 3000");
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

module.exports = {app};