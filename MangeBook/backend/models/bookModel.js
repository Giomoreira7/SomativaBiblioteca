const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir o esquema do livro
const bookSchema = new Schema({
  title: String,
  author: String,
  cover: String,
  loans: { type: Number, default: 0 },
});

// Verificar se o modelo já foi registrado, se não, registra o modelo
const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

module.exports = Book;
