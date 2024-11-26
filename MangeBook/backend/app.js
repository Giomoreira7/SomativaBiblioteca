require('dotenv').config();  // Carregar variáveis de ambiente

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importando as rotas
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const livroRoutes = require('./routes/livroRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Express 4.16+ já tem o express.json() integrado

// Conexão com MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
    process.exit(1);  // Fecha o processo se a conexão falhar
  });

// Definindo as rotas
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/livros', livroRoutes);

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensagem: 'Erro interno no servidor', erro: err.message });
});

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
