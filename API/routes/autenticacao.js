const express = require('express');
const router = express.Router();
const cartas_controller = require('../controllers/autenticacaoController');

router.post('/login', 
  // #swagger.tags = ['Autenticação']
  // #swagger.description = 'Obter um token para utilização da API.'
  cartas_controller.login);

router.post('/logout', 
  // #swagger.tags = ['Autenticação']
  // #swagger.description = 'Eliminar o token do usuário logado.'
  cartas_controller.logout);

module.exports = router;