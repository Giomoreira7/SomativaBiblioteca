// Carregar variáveis de ambiente
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importando as rotas
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const livroRoutes = require('./routes/livroRoutes');

const app = express();

// Verificar se as variáveis de ambiente necessárias estão configuradas
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: false  // Desabilitar SSL temporariamente
});

// Conexão com MongoDB - Parte 2
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
    process.exit(1);  // Fecha o processo se a conexão falhar
  });

// Middleware para CORS
const corsOptions = {
  origin: 'http://localhost:8080',  // Substitua pelo domínio do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));  // Usando CORS com configurações personalizadas

// Middleware para permitir que o Express entenda JSON
app.use(express.json());  // Express 4.16+ já tem o express.json() integrado

// Conexão com MongoDB
mongoose.connect(process.env.DB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  ssl: false  // Desabilitar SSL temporariamente
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
    process.exit(1);  // Fecha o processo se a conexão falhar
  });

// Definindo as rotas
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/livros', livroRoutes);  // Rota de livros

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (process.env.NODE_ENV === 'development') {
    // Em ambiente de desenvolvimento, exibe o erro completo
    res.status(500).json({ mensagem: 'Erro no servidor', erro: err.stack });
  } else {
    // Em produção, exibe apenas a mensagem de erro
    res.status(500).json({ mensagem: 'Erro interno no servidor', erro: err.message });
  }
});

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
