const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir o esquema do usuário
const userSchema = new Schema({
  name: String,
  email: String,
  role: String,
});

// Verificar se o modelo já foi registrado, se não, registra o modelo
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
