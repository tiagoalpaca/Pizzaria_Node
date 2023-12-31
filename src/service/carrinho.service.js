const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhosService = (limit,offset) => {
    return Carrinho.find().limit(limit).skip(offset);
}

const createCarrinhoService =  (body) => {
    return Carrinho.create(body);
}

const updateCarrinhoService =  (id, body) => {
    return Carrinho.findByIdAndUpdate(id,body,{returnDocument:"after"});
}

const removeCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}

module.exports = {
    findAllCarrinhosService,
    findCarrinhoByIdService,
    createCarrinhoService,
    updateCarrinhoService,
    removeCarrinhoService
}