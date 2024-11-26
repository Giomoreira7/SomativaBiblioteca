// routes/livroRoutes.js
const express = require('express');
const Livro = require('../models/livro');
const router = express.Router();

// Adicionar um novo livro
router.post('/', async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao adicionar livro', erro: error.message });
  }
});

// Obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar livros', erro: error.message });
  }
});

// Obter um livro específico
router.get('/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livro', erro: error.message });
  }
});

// Editar um livro
router.put('/:id', async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao editar livro', erro: error.message });
  }
});

// Deletar um livro
router.delete('/:id', async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao excluir livro', erro: error.message });
  }
});

// Reservar livro
router.post('/reservar', async (req, res) => {
  const { livroId } = req.body;
  try {
    const livro = await Livro.findById(livroId);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    // Lógica para reservar o livro
    res.status(200).json({ mensagem: 'Livro reservado com sucesso' });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao reservar livro', erro: error.message });
  }
});

// Emprestar livro
router.post('/emprestar', async (req, res) => {
  const { livroId } = req.body;
  try {
    const livro = await Livro.findById(livroId);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    // Lógica para emprestar o livro
    res.status(200).json({ mensagem: 'Livro emprestado com sucesso' });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao emprestar livro', erro: error.message });
  }
});

// Adicionar comentário ao livro
router.post('/:id/comentarios', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    livro.comentarios.push(req.body);
    await livro.save();
    res.status(201).json(livro.comentarios);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao adicionar comentário', erro: error.message });
  }
});

module.exports = router;
