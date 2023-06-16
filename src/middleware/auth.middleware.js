// Middleware vai ser acionado toda vez que a rota for chamada, para resolver 
const jwt = require("jsonwebtoken");
// usamos chave para pegar apenas um item desse service do usuario
const {findUserbyIdService} = require("../service/usuario.service");

// vamos fazer direto no module exports pois so vamos ter uma função.
module.exports = async (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({message:"O token não foi informado"});
    }
    // ["Bearer,<token>"]
    const parts = authHeader.split(" ");
    // vamos testar para ver se tem 2 partes
    if(parts.length !== 2){
        return res.status(401).send({message:"O token invalido 1.0!!"});
    }
    const [scheme,token] = parts;
    // beares serve para achar padroes, vai fazer um teste no esquema
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({message:"O token mal formado!!"});
    }

     // vamos decoficicar o token com base no segredo, com a ajuda do banco(async) vai virar ou erro ou vai decodificar
    //  o codigo(segredo) tem que ser igual ao do auth.service do generateToken
     jwt.verify(token,process.env.SECRET, async (err,decoded) => {
        if(err){
            console.log('erro:'+err);
            return res.status(500).send({message:'erro interno,tente novamente'});
        }
        const user = await findUserbyIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({message:'Token invalido 2.0'});
        }

        req.userId = decoded.id;

        return next();
    })
}