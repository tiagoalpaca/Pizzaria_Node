const mongoose = require("mongoose");
// vamos importar o modulo de criptografia
const bcrypt = require("bcrypt");

// esquema do proprio mongoose,mongo ja coloca o ID pra vc, require:true significa que é obrigatorio
const UsuarioSchema = new mongoose.Schema({
    nome: { type:String, required:true},
    email: { type: String, required:true,unique:true},
    // a senha precisa ser criptografada, assim adicionamos o npm i bcrypt
    senha: { type: String, required:true},
    // token: {type: String, required:true},
    imagem:{ type: String, required:true},
    // array de informações
    enderecos:[
        {
            rua:{ type:String, required:true},
            numero:{ type:String, required:true},
            complemento:{ type:String, required:false},
            CEP:{ type:String, required:true},
            // quando foi criado o endereço
            createdAt:{ type:Date, required:true,default: Date.now()},
        }
    ],
    produtos_fav:[
     {
         _id:{ type: mongoose.Schema.Types.ObjectId, unique: true, ref: "produtos"},
         createdAt:{ type:Date, required:true,default: Date.now()},
     }
     ],
    // se o usuario é admnistrador ou nao,por padrao(default) vai ser false
     admin:{type:String, required:true,default: false},
});

// função para criptografar a senha
UsuarioSchema.pre("save",async function(next){
    if(this.senha){
        // vamos embaralhar a senha 10x e devolver uma hash
        this.senha = await bcrypt.hash(this.senha,10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate",async function(next){
    if(this._update.senha){
        // vamos embaralhar a senha 10x e devolver uma hash
        this._update.senha = await bcrypt.hash(this._update.senha,10);
    }
    next();
});
const Usuario = mongoose.model("usuarios",UsuarioSchema);

module.exports= Usuario;
