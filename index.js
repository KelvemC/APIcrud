require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ModelProduto = require("./Schema/Produto");
const ControllProduto = require("./Routes/Controlls");
const cors = require("cors");

const corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/CriarProduto", ControllProduto.CadastrarProduto);
app.get("/ListarProduto", ControllProduto.ListarProduto);
app.put("/EditarProduto/:id/", ControllProduto.EditarProduto);
app.delete("/DeletarProduto/:id", ControllProduto.DeletarProduto);
app.get("/teste", (res)=>{
    console.log("Teste");
});

mongoose.set("strictQuery", true);
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log("Conectado no mongoDB"))
    .catch(err =>console.log(err));

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado http://localhost:${process.env.PORT}`);
});