const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req,res) =>{
    const {email,senha} = req.body;

    const user = await authService.loginService(email);
    // Teste se o usuario existe
    if(!user){
        return res.status(400).send({message:"Usuario nao encontrado!"});
    }

    const isPassowordValid = await bcrypt.compare(senha,user.senha);
    // Testa se a senha esta correta
    if(!isPassowordValid){
        return res.status(400).send({message:"Senha invalida"});
    }

    const token = authService.generateToken(user.id);

    res.status(200).send({
        email,
        token
    });
}

module.exports = {loginController};

