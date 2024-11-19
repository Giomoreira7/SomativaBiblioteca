const express = require('express');
const Book = require('../models/Book'); // Modelo para livros
const router = express.Router();

// Rota para obter todos os livros
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para adicionar um novo livro
router.post('/books', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    cover: req.body.cover,
    // outros campos como ano de publicação, etc.
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
