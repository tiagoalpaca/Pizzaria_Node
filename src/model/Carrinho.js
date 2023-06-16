const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema({
    // array de informações
    produtos:[
         {
             _id:{type: mongoose.Schema.Types.ObjectId,required: true,ref:"produtos"},
             quantidade:{ type: Number, required:true}
         },
    ],
    createdAt:{ type:Date, required:true,default: Date.now()},
    precoTotal: { type: Number, required:true},
    precoEntrega: { type: Number, required:true},
    userId: { type: mongoose.Schema.Types.ObjectId,required: true,ref:"usuarios"}
});

const Carrinho= mongoose.model("carrinhos",CarrinhoSchema);

module.exports= Carrinho;