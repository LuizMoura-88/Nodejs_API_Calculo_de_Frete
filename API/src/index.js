const express = require("express");

const rotas = require("./roteadores/rotas");

const app = express();

app.use(express.json());
app.use(rotas);

const PORTA = 3000;
app.listen(PORTA);
