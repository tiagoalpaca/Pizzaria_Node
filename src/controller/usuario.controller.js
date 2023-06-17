const userService = require("../service/usuario.service");
const mongoose = require("mongoose");

// cria a função para procurar um usuario especifico
const findUserByIdController = async (req,res)=>{
     // toda interação com o BD é bom usar o try,catch para melhorar tudo, para tentar conter danos. Toda interação é bom utilizar.

   try{
        const user = await userService.findUserbyIdService(req.params.id);

        if(!user){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        
        return res.status(200).send(user);
        
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        if(err){
            // vamos ver o tipo de erro e comparar
            console.log(err.king == "ObjectId");
            return res.status(500).send("ID informado esta incorreto,tente novamante");
        }
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
}

// Uma função para encontrar todos os usuarios, 
const findAllUsersController = async (req,res)=>{
    try{
        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
}

// cria a função de criar um usuario
const createUserController = async (req,res) => {
    try{
        return res.status(201).send(await userService.createUserService(req.body));
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    } 
}

// função para fazer o update
const updateUserController  = async (req,res) =>{
    try{
        const user = await userService.updateUserService(req.params.id,req.body);

        if(!user){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        
        return res.status(200).send(user);
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }    
}

// função para fazer o delete
const removeUserController = async (req,res) =>{
    try{
        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);

         if(deletedUser == null){
            res.status(404).send({message: 'Usuario nao encontado,tente novamente!'});
         }else{
             res.status(200).send({message: 'Sucesso,usuario deletado'});
        }

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const addUserAdressController = async(req,res) =>{

    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id,req.body);

        console.log(endereco);
        if(endereco.value ==null){
            res.status(404).send({message: 'Algo deu errado no endereço,tente novamante!'});
        }else{
            res.status(201).send({message: 'Endereco adicionado com sucesso'})
        }
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removeUserAdressController = async(req,res) =>{

    try{
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        endereco.value.enderecos.map((valor, chave) =>{
            if(valor._id == req.body.addressId){
                found = true;
            }
        })
        if(found){
            res.status(200).send({message: 'Endereco removido com sucesso'})
        }else{
            res.status(404).send({message: 'Algo deu errado no endereço,endereco nao foi removido,tente novamante!'});
        }
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const addUserFavPizzaController = async(req,res) =>{

    try{
        return res.status(201).send(await userService.addUserFavPizzaService(req.params.id,req.body));
    }catch(err){
 
     console.log('erro: '+err);
     return res.status(500).send("erro no servidor,tenta novamante mais tarde");
     }    
}

const removeUserFavPizzaController  = async(req,res) =>{
    try{
        return res.status(200).send(await userService.removeUserFavPizzaService(req.params.id,req.body));
    }catch(err){
 
     console.log('erro: '+err);
     return res.status(500).send("erro no servidor,tenta novamante mais tarde");
     }   
}

module.exports ={
    findAllUsersController,
    createUserController ,
    findUserByIdController,
    updateUserController,
    addUserAdressController,
    removeUserController,
    removeUserAdressController,
    addUserFavPizzaController,
    removeUserFavPizzaController
}