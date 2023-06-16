const categoriaService = require("../service/categoria.service");
const mongoose = require("mongoose");

const findCategoriaByIdController = async (req,res)=>{
    try{
        return res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const findAllCategoriasController = async (req,res)=>{
    try{
        return res.status(200).send(await categoriaService.findAllCategoriasService(req.query.limit, req.query.offset));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const createCategoriaController = async (req,res) => {
    try{
        return res.status(201).send(await categoriaService.createCategoriaService(corpo));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const updateCategoriaController  = async (req,res) =>{
    try{
        return res.status(200).send(await categoriaService.updateCategoriaService(req.params.id,req.body));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removeCategoriaController = async (req,res) =>{
    try{
        return res.status(200).send(await categoriaService.removeCategoriaService(req.params.id));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

module.exports ={
   findCategoriaByIdController,
   findAllCategoriasController,
   createCategoriaController,
   updateCategoriaController,
   removeCategoriaController
}