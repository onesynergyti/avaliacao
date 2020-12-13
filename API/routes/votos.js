var express = require('express');
var router = express.Router();

var votos_controller = require('../controllers/votosController');

router.get('/:id?', 
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Obter um ou vários votos.'
  // #swagger.parameters['id?'] = { description: 'ID do voto como filtro opcional.' }
  votos_controller.lista_voto);

router.post('/', 
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Criar um voto.'
  votos_controller.cadastrar_voto);

router.put('/:id', 
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Alterar um voto.'
  // #swagger.parameters['id'] = { description: 'ID do voto que será alterado.' }
  votos_controller.atualizar_voto);

router.delete('/:id', 
  // #swagger.tags = ['Votos']
  // #swagger.description = 'Excluir um voto.'
  // #swagger.parameters['id'] = { description: 'ID do voto que será excluído.' }
  votos_controller.excluir_voto);

module.exports = router;