const carrinhoService = require("../service/carrinho.service");
const mongoose = require("mongoose");

const findCarrinhoByIdController = async (req,res)=>{
    try{
        return res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const findAllCarrinhosController = async (req,res)=>{
    try{
        return res.status(200).send(await carrinhoService.findAllCarrinhosService(req.query.limit, req.query.offset));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const createCarrinhoController = async (req,res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
        }
        return res.status(201).send(await carrinhoService.createCarrinhoService(corpo));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const updateCarrinhoController  = async (req,res) =>{
    try{
        return res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id,req.body));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removeCarrinhoController = async (req,res) =>{
    try{
        return res.status(200).send(await carrinhoService.removeCarrinhoService(req.params.id));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

module.exports ={
   findCarrinhoByIdController,
   findAllCarrinhosController,
   createCarrinhoController,
   updateCarrinhoController,
   removeCarrinhoController
}