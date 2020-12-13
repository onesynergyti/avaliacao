var express = require('express');
var router = express.Router();

var historias_controller = require('../controllers/historiasController');

router.get('/:id?', 
  // #swagger.tags = ['Histórias']
  // #swagger.description = 'Obter uma ou várias histórias.'
  // #swagger.parameters['id?'] = { description: 'ID da história como filtro opcional.' }
  historias_controller.lista_historias);

router.post('/', 
  // #swagger.tags = ['Histórias']
  // #swagger.description = 'Criar uma história.'
  historias_controller.cadastrar_historia);

router.put('/:id', 
  // #swagger.tags = ['Histórias']
  // #swagger.description = 'Alterar uma história.'
  // #swagger.parameters['id'] = { description: 'ID da história que será alterada.' }
  historias_controller.atualizar_historia);

router.delete('/:id', 
  // #swagger.tags = ['Histórias']
  // #swagger.description = 'Excluir uma história.'
  // #swagger.parameters['id'] = { description: 'ID da história que será excluída.' }
  historias_controller.excluir_historia);

module.exports = router;