const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
    // exemplo de categoria seria o sabor
    nome: { type:String, required:true,unique:true},
    createdAt:{ type:Date, required:true,default: Date.now()}
});

const Categoria = mongoose.model("categorias",CategoriaSchema);

module.exports= Categoria;