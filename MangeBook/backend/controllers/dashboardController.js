const Book = require('../models/bookModel');
const User = require('../models/userModel');

// Retorna os livros mais emprestados
exports.getBooksMaisEmprestados = async (req, res) => {
  try {
    const livrosMaisEmprestados = await Book.find()
      .sort({ loans: -1 })  // Ordena por número de empréstimos (decrescente)
      .limit(5);  // Limita para os 5 mais emprestados
    res.json({ livrosMaisEmprestados });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar livros mais emprestados', error });
  }
};

// Retorna o total de livros
exports.getTotalLivros = async (req, res) => {
  try {
    const totalLivros = await Book.countDocuments();
    res.json({ totalLivros });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar total de livros', error });
  }
};

// Retorna o total de usuários
exports.getTotalUsuarios = async (req, res) => {
  try {
    const totalUsuarios = await User.countDocuments();
    res.json({ totalUsuarios });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar total de usuários', error });
  }
};

// Retorna o total de empréstimos
exports.getTotalEmprestimos = async (req, res) => {
  try {
    const totalEmprestimos = await Book.aggregate([
      { $group: { _id: null, total: { $sum: '$loans' } } }
    ]);
    res.json({ totalEmprestimos: totalEmprestimos[0].total });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar total de empréstimos', error });
  }
};
