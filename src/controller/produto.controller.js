const produtoService = require("../service/produto.service");
const mongoose = require("mongoose");

const findProductByIdController = async (req,res)=>{
    try{

        const produto = await produtoService.findProductByIdService(req.params.id);

        if(!produto){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        return res.status(200).send(produto);

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const findAllProductsController = async (req,res)=>{
    try{
        return res.status(200).send(await produtoService.findAllProductsService(req.query.limit, req.query.offset));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const createProductController = async (req,res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
        }
        return res.status(201).send(await produtoService.createProductService(corpo));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const updateProductController  = async (req,res) =>{
    try{
        const produto = await produtoService.updateProductService(req.params.id,req.body);

        if(!produto){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        return res.status(200).send(produto);
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removeProductController = async (req,res) =>{
    try{
        const produto = await produtoService.removeProductService(req.params.id);

        if(!produto){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        return res.status(200).send(produto);
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const addCategoriaProdutoController = async (req,res) =>{
    try{
        return res.status(201).send(await produtoService.addCategoriaProdutoService(req.params.id, req.body));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removeCategoriaProdutoController = async (req,res) =>{
    try{
         return res.status(200).send(await produtoService.removeCategoriaProdutoService(req.params.id,req.body));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagesm do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

module.exports ={
   findProductByIdController,
   findAllProductsController,
   createProductController,
   updateProductController,
   removeProductController,
   addCategoriaProdutoController,
   removeCategoriaProdutoController
}