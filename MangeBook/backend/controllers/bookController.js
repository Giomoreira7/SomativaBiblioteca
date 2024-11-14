// backend/controllers/bookController.js
const Book = require('../models/Book');

// Função para criar um novo livro
const createBook = async (req, res) => {
  try {
    const { titulo, autor, descricao, anoPublicacao, genero, isbn, numCopiasDisponiveis, imagem } = req.body;

    // Verificando se o livro já existe
    const bookExists = await Book.findOne({ isbn });
    if (bookExists) {
      return res.status(400).json({ message: 'Livro já registrado!' });
    }

    const newBook = new Book({
      titulo,
      autor,
      descricao,
      anoPublicacao,
      genero,
      isbn,
      numCopiasDisponiveis,
      imagem
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar livro', error: err });
  }
};

// Função para listar todos os livros
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livros', error: err });
  }
};

// Função para buscar um livro por ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar livro', error: err });
  }
};

// Função para atualizar um livro
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, descricao, anoPublicacao, genero, isbn, numCopiasDisponiveis, imagem } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, {
      titulo,
      autor,
      descricao,
      anoPublicacao,
      genero,
      isbn,
      numCopiasDisponiveis,
      imagem
    }, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar livro', error: err });
  }
};

// Função para deletar um livro
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }

    res.status(200).json({ message: 'Livro deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar livro', error: err });
  }
};

// Exportando as funções
module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
