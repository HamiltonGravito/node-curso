const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, cliente) => {
    if(err) {
        return console.log("Não foi possível conectar ao Servidor MongoDB!!!");
    }
        console.log("Conectado ao Servidor MongoDB!!!");
        const db = cliente.db('TodoApp');
       
       db.collection('Users').findOneAndUpdate({_id: new ObjectID('5dd710034dddce1950535dca')}, {
           $set: {
               name: "Hamilton"
           },
           //Incrementa o valor de um campo
           $inc: {
               age: 1
           },
       }, {
           returnOriginal: false
       }).then((result) => {console.log(result);})

       cliente.close();
});