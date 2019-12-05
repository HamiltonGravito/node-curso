//Exporta a varialvel mongoose, ou seja, faz a conexão com o BD - Desestruturação ES6
var mongoose = require('mongoose');
//Configuração para o uso de promisses
mongoose.Promise = global.Promise;
//Conexão BD
mongoose.connect('mongodb://localhost:27017/TodoApp');