const router = require("express").Router();
const authController = require("../controller/auth.controller");

// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaLogin} = require ("../middleware/validacao.middleware");

router.post("/login",validaLogin,authController.loginController);

module.exports = router;

