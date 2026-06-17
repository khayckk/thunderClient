// server.js
const express = require('express');
const app = express();
const porta = 8080;

// Importamos o Controller
const { listarCardapio, buscaPorId } = require('./src/controllers/cardapioController');

// Tradutores de JSON nativos do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// A NOSSA VÁLVULA GET:
app.get('/cardapio', listarCardapio);

app.get ('/cardapio/:id', buscaPorId)

app.listen(porta, () => {
    console.log(`[SUBMUNDO] Motor rodando perfeitamente na porta ${porta}...`);
});
