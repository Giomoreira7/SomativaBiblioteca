// backend/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rota para registrar um novo livro
router.post('/books', bookController.createBook);

// Rota para listar todos os livros
router.get('/books', bookController.getBooks);

// Rota para buscar um livro por ID
router.get('/books/:id', bookController.getBookById);

// Rota para atualizar um livro
router.put('/books/:id', bookController.updateBook);

// Rota para deletar um livro
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
