const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, cliente) => {
    if(err) {
        return console.log("Não foi possível conectar ao Servidor MongoDB!!!");
    }
        console.log("Conectado ao Servidor MongoDB!!!");
        const db = cliente.db('TodoApp');
        
        /*Esse trecho utiliza o metodo find para buscar coleções.. Ele pode utilizar ou não
        augumento para especificar o documento que deseja  retornar (Funciona como um ponteiro enquanto existir docs que atendam
        a especificação do find())
        db.collection('Todos').find({ _id: new ObjectID('5dca17bc8969a31a746e4ed3') }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log("Não foi possivel buscar!!!", err);
        });
        */

        /* Conta a quantidade de registros (documentos)
        db.collection('Todos').find({ }).count().then((count) => {
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log("Não foi possivel buscar!!!", err);
        });

        */
        cliente.close();
});