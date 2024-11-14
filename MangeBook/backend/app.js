// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Importando as rotas dos livros

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conectando ao banco de dados MongoDB
mongoose.connect('mongodb+srv://Giovanna:271004@library.hdzyr.mongodb.net/library?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Usando as rotas
app.use('/api', userRoutes);
app.use('/api', bookRoutes); // Adicionando as rotas de livros

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
