const express = require("express");
const router = express.Router();

// importa o controler do usuario
const carrinhoController = require("../controller/carrinho.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaCarrinho,validaIdParams,validaProdutosCarrinhoPedido} = require ("../middleware/validacao.middleware");
// importar o middleware para fazer a paginacao
const paginacao = require ("../middleware/paginacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,validaIdParams,carrinhoController.findCarrinhoByIdController);
router.get("/findAll",authMiddleware,paginacao,carrinhoController.findAllCarrinhosController);

// metodo Post
router.post("/create",authMiddleware,validaProdutosCarrinhoPedido,validaCarrinho,carrinhoController.createCarrinhoController);

// Metodo Put
router.put("/update/:id",authMiddleware,validaIdParams,validaCarrinho,carrinhoController.updateCarrinhoController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,validaIdParams,carrinhoController.removeCarrinhoController);

module.exports = router;