// src/controllers/CardapioController.js
const { cardapioOficial } = require("../models/CardapioModel");

const listarCardapio = (req, res) => {
  console.log("[LOG] Alguém solicitou o cardápio oficial no servidor.");

  // Devolvemos o Status 200 (OK) e o pacote JSON com os dados
  return res.status(200).json({
    sucesso: true,
    quantidade_itens: cardapioOficial.length,
    dados: cardapioOficial,
  });
};

const buscaPorId = (req, res) => {
  const idEncontrado = parseInt(req.params.id);
  const itemEncontrado = cardapioOficial.find((item) => item.id === idEncontrado);
  if (!itemEncontrado) {
    return res.status(400).json({
     mensagem: "Item Inexistente"
    });
  }
  (item) => item.id === idEncontrado
    return res.status(200).json({
    mensagem: "Item encontrado:",
    item: itemEncontrado,
  });
  const adicionarItem = (req, res) => {
    const { nome, categoria, preco } = req.body;
    if(!id.nome && id.categoria && id.preco){
      res.status(400).json({
        erro:"Pacote rejeitado! Faltam dados."
      })
    }
  }
};
module.exports = { listarCardapio, buscaPorId };