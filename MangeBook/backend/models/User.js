const mongoose = require('mongoose');

// Definindo o esquema de dados para o usuário
const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true },
  tipo: { type: String, required: true }, // Pode ser 'Aluno' ou 'Funcionario'
  identificacao: { type: String, required: true }, // RM ou NIF
  senha: { type: String, required: true }, // A senha será criptografada no backend
});

// Criando o modelo de usuário com o esquema acima
const User = mongoose.model('User', UserSchema);

module.exports = User;
