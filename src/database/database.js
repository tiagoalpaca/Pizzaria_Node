// instalacao do mongoose, npm i mongoose

// para funcionar vamos chamar o mongoose,o mongoose é mais fortemente tipado 
const mongoose = require('mongoose');

// função pra conexão
function connectToDatabase() {
    // o connect precisa da URI e as segunda parte sao opcoes
    // mongoose.connect('mongodb://localhost:27017/aulas', { , tive que substituir o localhost por 127.0.0.1 pois estava dando erro
    // mongoose.connect('mongodb://127.0.0.1:27017/AtividadeBraba',
    // Colocamos uma variavel por questão de segurança
    mongoose.connect(process.env.URLDATABASE, {
        // São duas confingurações para questão unificada, para nao ter problemas na conexão
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo DB Conectado");
    }).catch((err) => {
        return console.log('Erro na conexão com o banco:'+ err);
    })
}

module.exports = connectToDatabase;