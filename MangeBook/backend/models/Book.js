// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  descricao: String,
  ano: Number,
  genero: String,
  isbn: String,
  copiasDisponiveis: Number,
  capa: String,  // Caminho da imagem
  comentarios: [{
    usuario: String,
    comentario: String,
    avaliacao: Number
  }],
  historico: [{
    usuario: String,
    dataEmprestimo: Date,
    dataDevolucao: Date
  }]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
