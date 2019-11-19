//Cliente da conexão de Banco de Dados a partir da biblioteca mongodb
//const MongoClient = require('mongodb').MongoClient; - Usando Desestruturação do ES6
//Desestruturação cria variaveis a partir de propriedades de um objeto
const {MongoClient} = require('mongodb');

//Conecta o cliente ao banco que roda no host local na porta 27017 com o nome TodoApp;
//Após existe uma arrow function, que retorna a função da chamada , onde o primeiro argumento
//retorna um erro caso exista e o segundo um cliente para acesso ao banco de dados;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, cliente) => {
    if(err) {
        return console.log("Não foi possível conectar ao Servidor MongoDB!!!");
    }
        console.log("Conectado ao Servidor MongoDB!!!");
        const db = cliente.db('TodoApp');

        //Adiciona uma coleção ao BD e insere um novo documento a coleção, onde os parametros
        //são: 1 - Objeto (chave e valor) e 2 - Função de Retorno da chamada (ERRO e SUCESSO)
        db.collection('Todos').insertOne({
            text: 'Something to do',
            completed: false
        }, (err, result) => {
            if(err){
                return console.log("Não foi possivel inserir", err);
            }
            //Transforma os dados em uma String para enviar para o servidor, passando como parâmetro
            //todos os documentos inseridos (ops), com todas suas propriedades e 2 de recuo (legibilidade)
            console.log(JSON.stringify(result.ops, undefined, 2));
        });

        db.collection('Users').insertOne({
            name: "Heytor",
            age: 04,
            location: "Brasil"
        }, (err, result) => {
            if(err){
                return console.log("Não foi possível inserir usuario!!!", err);
            }
            console.log(result.ops[0]._id.getTimestamp());
        });

        cliente.close();
});