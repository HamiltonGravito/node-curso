//Adiciona a biblioteca do mongoose
var mongoose = require('mongoose');
//Cria um Model Objeto
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, 
        minlength: 3,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
//Exporta o model Todo para quem fizer a solicitação
module.exports = {Todo};