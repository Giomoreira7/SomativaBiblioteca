const express = require('express');
const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

// Rotas do dashboard
router.get('/dashboard/livros-mais-emprestados', dashboardController.getBooksMaisEmprestados);
router.get('/dashboard/total-livros', dashboardController.getTotalLivros);
router.get('/dashboard/total-usuarios', dashboardController.getTotalUsuarios);
router.get('/dashboard/total-emprestimos', dashboardController.getTotalEmprestimos);

module.exports = router;
