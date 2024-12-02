require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importando as rotas
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const livroRoutes = require('./routes/livroRoutes');

const app = express();

// Middleware para CORS e JSON
const corsOptions = {
    origin: 'http://localhost:8080', // Substitua pelo domínio do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions));
app.use(express.json());

// Conexão com o MongoDB
mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB', err);
        process.exit(1);
    });

// Definindo as rotas
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/livros', livroRoutes);

// Middleware de erro global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        mensagem: 'Erro interno no servidor',
        erro: process.env.NODE_ENV === 'development' ? err.stack : err.message,
    });
});

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
