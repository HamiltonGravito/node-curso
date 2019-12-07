const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

//Essa função sempre será executada antes de rodar o caso de teste e neste caso
//ela garante que o BD esteja vazio com o metodo remove()
beforeEach((done) =>{
    Todo.remove({}).then(() => done());
})

//Esse caso de teste faz uma chamada POST para /todos e tem o objetivo de criar
//um novo Objeto Todo
describe('POST/todos', () => {
    it('Deve criar um novo Todo', (done) => {
        var text = 'Test todo text';

        //Faz uma requisição para a aplicação app no caminho /todos enviando um texto
        //onde espera-se receber um status 200 e que a resposta contenha no seu corpo
        //um texto que seja igual a variavel text e caso ocorra um erro a execução para
        // e retorna o erro finalizando o teste
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                //Nesse segundo caso busca todos os objetos Todos do BD e espera-se
                //que exista pelo menos um Todo e que este todo possua o texto da variavel text 
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            })
    });

    it('Não criar Todo', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){
                return done(err);
            }
        Todo.find().then(todos => {
            expect(todos.length).toBe(0);
            done();
        }).catch((e) => done(e));
        })
    });
});