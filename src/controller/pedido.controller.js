const PedidoService = require("../service/pedido.service");
const mongoose = require("mongoose");

const findPedidoByIdController = async (req,res)=>{
    try{

        const pedido = await PedidoService.findPedidoByIdService(req.params.id);

        if(!pedido){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        return res.status(200).send(pedido);

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const findAllPedidosController = async (req,res)=>{
    try{
        return res.status(200).send(await PedidoService.findAllPedidosService(req.query.limit, req.query.offset));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const createPedidoController = async (req,res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
        }
        return res.status(201).send(await PedidoService.createPedidoService(corpo));
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removePedidoController = async (req,res) =>{
    try{
        
        const pedido = await PedidoService.removePedidoService(req.params.id);

        if(!pedido){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        return res.status(200).send(pedido);

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const updateStatusPedidoController  = async (req,res) =>{
    try{
        const pedido = await PedidoService.updateStatusPedidoService(req.params.id);

        if(!pedido){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }
        return res.status(200).send(pedido);

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

module.exports ={
   findPedidoByIdController,
   findAllPedidosController,
   createPedidoController,
   removePedidoController,
   updateStatusPedidoController
}