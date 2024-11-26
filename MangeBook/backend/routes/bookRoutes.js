const express = require('express');
const router = express.Router();

// Exemplo de rota para listar todos os livros
router.get('/', (req, res) => {
  res.json({ mensagem: 'Lista de livros' });
});

// Exemplo de rota para adicionar um livro
router.post('/', (req, res) => {
  const newBook = req.body;
  // lógica para adicionar o livro ao banco
  res.status(201).json({ mensagem: 'Livro adicionado com sucesso', livro: newBook });
});

module.exports = router;
