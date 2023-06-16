const express = require("express");
const router = express.Router();

// importa o controler do usuario
const produtoController = require("../controller/produto.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaProduto,validaIdParams,valida_IdBody} = require ("../middleware/validacao.middleware");
// importar o middleware para fazer a paginacao
const paginacao = require ("../middleware/paginacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,validaIdParams,produtoController.findProductByIdController);
router.get("/findAll",authMiddleware,paginacao,produtoController.findAllProductsController);

// metodo Post
router.post("/create",authMiddleware,validaProduto,produtoController.createProductController);
router.post("/addCategoria/:id",authMiddleware,validaIdParams,valida_IdBody,produtoController.addCategoriaProdutoController);

// Metodo Put
router.put("/update/:id",authMiddleware,validaIdParams,validaProduto,produtoController.updateProductController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,validaIdParams,produtoController.removeProductController);
router.delete("/removeCategoria/:id",authMiddleware,validaIdParams,produtoController.removeCategoriaProdutoController);

module.exports = router;