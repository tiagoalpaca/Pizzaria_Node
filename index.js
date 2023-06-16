// npm i express,mongoose e jsonwebtoken
// npc i -D nodemon

// express
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
// vai chamar o dotenv antes de qualquer arquivo que precise dele
require("dotenv").config();
// Importando o cors
const cors = require("cors");

// Porta vai ser a 3000
const port = 3000;

// api rest 
app.use(express.json());
// o cors sem parametro fica uma tudo aberto, por isso é necessario passar as restrições de segurança
app.use(cors(
    {
        // limita as origens que  tem acesso, pode ser um array
        origin:[
            "localhost:3001",
            "localhost:3002"
        ],
        // limita os metodos que tem acesso
        methods: ["GET","POST","PUT","DELETE","PATCH"]
    }
));

const mongoose = require('mongoose');
// importar a função para conecter database
 const connectToDatabase = require("./src/database/database"); 
connectToDatabase();

// importar as rotas do usuario e as chamando
const usuario= require("./src/router/usuario.router");
// Importa as rotas auth
const auth = require("./src/router/auth.router");
// Importa as rotas do produto
const produto = require("./src/router/produto.router");
// Importa as rotas da categoria
const categoria = require("./src/router/categoria.router");
// Importa as rotas da carrinho
const carrinho = require("./src/router/carrinho.router");
// Importa as rotas da pedido
const pedido = require("./src/router/pedido.router");
// Importa as rotas do docs
const docs = require("./src/router/docs.router");

// Chamando as rotas do usuario,auth,produto,categoria,pedido e docs
app.use("/usuario", usuario);
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria);
app.use("/carrinho", carrinho);
app.use("/pedido", pedido);
app.use("/docs", docs);

app.get("/",(req,res)=> {
    res.send({
        message:"Bem vindo ao Market Place"
    });
})

// listen serve para observar, ve se alguem esta mandando alguma solicitação
app.listen(port,()=>{
    // acrescentar o http no localhost facilita pois ai ele ja vira um link
    console.log('Servidor rodando em http://localhost:'+port);
})

// swagger vai vir para complementar a documentação.
// npm i swagger, agora especifico do projeto npm i swagger-ui-express
// O arquivo swagger precisa estar com a estrutura de JSON {}, mesmo que vazia para funcionar

// Instalar o cors, npm i cors