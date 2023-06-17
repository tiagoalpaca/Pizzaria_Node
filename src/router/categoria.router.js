const express = require("express");
const router = express.Router();

// importa o controler do usuario
const categoriaController = require("../controller/categoria.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaCategoria,validaIdParams} = require ("../middleware/validacao.middleware");
// importar o middleware para fazer a paginacao
const paginacao = require ("../middleware/paginacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,validaIdParams,categoriaController.findCategoriaByIdController);
router.get("/findAll",authMiddleware,paginacao,categoriaController.findAllCategoriasController);

// metodo Post
router.post("/create",validaCategoria,categoriaController.createCategoriaController);

// Metodo Put
router.put("/update/:id",authMiddleware,validaIdParams,validaCategoria,categoriaController.updateCategoriaController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,validaIdParams,categoriaController.removeCategoriaController);

module.exports = router;