require("../Schema/Produto");
const mongoose = require("mongoose");
const Produtos = mongoose.model("Produtos");

async function Cadastro(json){
    try{
        const produto = await Produtos.create(json);
        return "Produto Cadastrado!";
    }catch(error){
        console.log(error);
    };
};

async function Editar(id, NovoNome, NovaDescricao, NovoValor, Estado){
    try{
        const produto = await Produtos.findOneAndUpdate({_id:id}, {nome:NovoNome, descricao:NovaDescricao,
        valor:NovoValor, disponivel:Estado});
        return "Produto Editado!";
    }catch(error){
        console.log(error);
    };
};

async function Excluir(id){
    try{
        const produto = await Produtos.findOneAndRemove({_id:id});
        return "Produto Excluído!";
    }catch(error){
        console.log(error);
    };
};

async function Listar(){
    try{
        const produtos = await Produtos.find();
        return produtos;
    }catch(error){
        console.log(error);
    };
};

module.exports = {
    Cadastro,
    Editar,
    Listar,
    Excluir

}