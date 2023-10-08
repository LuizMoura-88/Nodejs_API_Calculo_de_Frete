const express = require("express");
const Produtos = require("../controladores/produtos");

const rotas = express();
const controleDeProdutos = new Produtos();

rotas.get("/produtos", controleDeProdutos.buscarProdutos);
rotas.get("/produtos/:idProduto", controleDeProdutos.detalharProduto);

rotas.get(
  "/produtos/:idProduto/frete/:cep",
  controleDeProdutos.calcularFreteProduto
);

module.exports = rotas;
