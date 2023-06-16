const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

// em uma linha nao precisa ter o return
const loginService = (email) => Usuario.findOne({email:email}).select("senha");

// const generateToken = (userId) => jwt.sign({id:userId},"aoadkaodkaofjasofjasofo132414",{expireIn:8400});
const generateToken = (userId) => jwt.sign({id:userId},process.env.SECRET);
module.exports = {
    loginService,
    generateToken
}