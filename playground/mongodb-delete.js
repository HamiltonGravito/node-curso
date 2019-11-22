const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, cliente) => {
    if(err) {
        return console.log("Não foi possível conectar ao Servidor MongoDB!!!");
    }
        console.log("Conectado ao Servidor MongoDB!!!");
        const db = cliente.db('TodoApp');
       
       /*deleteMany - Exclui todos 
       db.collection('Todos').deleteMany({text: "Almoçar"}).then((result) => {
           console.log(result);
       });
       */

      /*deleteOne - Exclui o primeiro registro
      db.collection('Todos').deleteOne({text: "Almoçar"}).then((result) => {
          console.log(result);
      })
      */
      //Exclui a primeira ocorrencia e retorna o objeto excluido
      db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
          console.log(result);
      })

       cliente.close();
});