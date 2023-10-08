const itensProdutos = require("../banco-de-dados/database");
const { getStateFromZipcode } = require("utils-playground");

class Produtos {
  async buscarProdutos(req, res) {
    try {
      return res.json(itensProdutos);
    } catch (erro) {
      return res.json(erro.message);
    }
  }

  async detalharProduto(req, res) {
    try {
      const { idProduto } = req.params;

      const produto = itensProdutos.find(
        (item) => item.id === Number(idProduto)
      );
      if (!produto) {
        return res.status(404).json({ mensagem: "Produto não foi encontrado" });
      }

      return res.json(produto);
    } catch (erro) {
      return res.json(erro.message);
    }
  }

  async calcularFreteProduto(req, res) {
    try {
      const { idProduto, cep } = req.params;

      const produto = itensProdutos.find(
        (item) => item.id === Number(idProduto)
      );

      if (!produto) {
        return res.status(404).json({ mensagem: "Produto não foi encontrado" });
      }
      if (isNaN(cep) || cep.length !== 8) {
        return res.status(404).json({
          mensagem: "Necessário informar cep válido com 8 algarismo!",
        });
      }
      const estado = await getStateFromZipcode(cep);
      let valorFrete = 0;

      if (estado === "SP" || estado === "RJ") {
        valorFrete = produto.valor * 0.15;

        const freteCaculado = {
          produto,
          estado,
          frete: valorFrete,
        };

        return res.json({ freteCaculado });
      }
      if (
        estado === "BA" ||
        estado === "SE" ||
        estado === "AL" ||
        estado === "PE" ||
        estado === "PB"
      ) {
        valorFrete = produto.valor * 0.1;
        const freteCaculado = {
          produto,
          estado,
          frete: valorFrete,
        };

        return res.json({ freteCaculado });
      }

      const freteCaculado = {
        produto,
        estado,
        frete: valorFrete * 0.12,
      };

      return res.json({ ...freteCaculado });
    } catch (erro) {
      return res.json(erro.message);
    }
  }
}

module.exports = Produtos;
