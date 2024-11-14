const mongoose = require('mongoose');

// Definindo o esquema de dados para o livro
const BookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  descricao: { type: String, required: true },
  anoPublicacao: { type: Number, required: true },
  genero: { type: String, required: true },
  isbn: { type: String, required: true },
  numCopiasDisponiveis: { type: Number, required: true, default: 0 },
  imagem: { type: String, default: '' }, // URL para a imagem da capa, se necessário
  emprestado: { type: Boolean, default: false } // Para controle de disponibilidade
}, { timestamps: true });

// Criando o modelo de livro com o esquema acima
const Book = mongoose.model('Book', BookSchema);

module.exports = Book;