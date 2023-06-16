const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: { type:String, required:true,unique:true},
    descricao: { type: String, required:true},
    precoUnitario: { type: Number, required:true},
    imagem:{ type: String, required:true},
    codigoBarra:{type: Number, required:true,unique:true},
    // array de informações
    categorias:[
         {
             _id:{type: mongoose.Schema.Types.ObjectId,required: true,ref:"categorias"},
             createdAt:{ type:Date, required:true,default: Date.now()},
         }
    ],
});

const Produto = mongoose.model("produtos",ProdutoSchema);

module.exports= Produto;