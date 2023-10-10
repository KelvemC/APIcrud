const {Cadastro, Listar, Editar, Excluir} = require("../Functions/FunctionsCrud");

exports.CadastrarProduto = async (req, res)=>{
    try {
        const NovoProduto = await Cadastro(req.body);
        return res.status(200).json({
            message: "Dipositivo Cadastrado!"
        });
    }catch (error) {
        console.log(error);
    }
    
};

exports.ListarProduto = async (req, res) =>{
    try{
        const ListagemProduto = await Listar();
        res.status(200).json({
            Produtos:ListagemProduto
        })
    }catch(error){
        console.log(error);
    }
    
};

exports.EditarProduto = async (req, res)=>{
    try{
        const EdicaoProduto = await Editar(req.params.id, req.body.nome, req.body.descricao, 
            req.body.valor, req.body.disponivel);
        res.status(200).json({
            message: EdicaoProduto
        })
    }catch(error){
        console.log(error);
    }
    
};

exports.DeletarProduto = async (req, res)=>{
    try{
        const ExcluirProduto = await Excluir(req.params.id);
        res.status(200).json({
            message: ExcluirProduto
        })
    }catch(error){
        console.log(error);
    }
    
};