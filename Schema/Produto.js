const mongoose = require("mongoose");
const produto = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    disponivel:{
        type: Boolean,
        required: true    }
},{
    timestamps: true
});

mongoose.model("Produtos", produto);