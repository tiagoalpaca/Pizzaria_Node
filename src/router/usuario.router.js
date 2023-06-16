 // As rotas são para melhorar os endpoints e pra saber para onde vão apontar quando necessario
// const router = require("express").Router(); 
const express = require("express");
const router = express.Router();
// importa o controler do usuario
const UsuarioController = require("../controller/usuario.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaUsuario,validaIdParams,validaEndereco,valida_IdBody} = require ("../middleware/validacao.middleware");
// importar o middleware para fazer a paginacao
const paginacao = require ("../middleware/paginacao.middleware");

// vamos importar o controller, O . ponto serve para algo no seu mesmo nivel, . . vc volta 2 nivel na questão de pastas da arquitetura, como esta dentro da pasta controller precisamos de ..
const usuario = require("../controller/usuario.controller");
// o router possui os métodos HTTP,faz o gerenciamento primario do que vai disparado quando o usuario clicar
// findAll é o outro campo para algo que vai disparado quando o get for chamado, normalmente uma função.
// apos importar do controller temos as funções que passamos no router

// Caso não se insira o middleware, a pessoa não precisa do token para fazer a pesquisa
// Get
router.get("/findById/:id",authMiddleware,validaIdParams,usuario.findUserByIdController); 
router.get("/findAll",authMiddleware,paginacao, usuario.findAllUsersController);

// Post
router.post("/create",validaUsuario, usuario.createUserController);
router.post("/addAddress/:id", authMiddleware,validaIdParams,validaEndereco,usuario.addUserAdressController);
router.post("/addFavPizza/:id",authMiddleware,validaIdParams,valida_IdBody, usuario.addUserFavPizzaController);

// Put
// primeira validamos o token, dps o usuario
router.put("/update/:id", authMiddleware,validaIdParams,validaUsuario,usuario.updateUserController);

// Delete
router.delete("/remove/:id", authMiddleware,validaIdParams,usuario.removeUserController);
router.delete("/removeAddress",authMiddleware, usuario.removeUserAdressController);
router.delete("/removeFavPizza/:id", authMiddleware,validaIdParams,usuario.removeUserFavPizzaController);

// para exportar os routers
module.exports = router;