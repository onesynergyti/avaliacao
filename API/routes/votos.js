const express = require('express');
const router = express.Router();
const votos_controller = require('../controllers/votosController');
const helper_autoricacao = require('../helpers/validacaoJWT');

router.get('/:id?', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Obter um ou vários votos.'
  // #swagger.parameters['id?'] = { description: 'ID do voto como filtro opcional.' }
  votos_controller.lista_voto);

router.post('/', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Criar um voto.'
  votos_controller.cadastrar_voto);

router.put('/:id', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Alterar um voto.'
  // #swagger.parameters['id'] = { description: 'ID do voto que será alterado.' }
  votos_controller.atualizar_voto);

router.delete('/:id', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Excluir um voto.'
  // #swagger.parameters['id'] = { description: 'ID do voto que será excluído.' }
  votos_controller.excluir_voto);

module.exports = router;