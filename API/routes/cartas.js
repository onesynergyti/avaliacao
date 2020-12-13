var express = require('express');
var router = express.Router();

var cartas_controller = require('../controllers/cartasController');

router.get('/:id?', 
  // #swagger.tags = ['Cartas']
  // #swagger.description = 'Obter uma ou várias cartas.'
  // #swagger.parameters['id?'] = { description: 'ID da carta como filtro opcional.' }
  cartas_controller.lista_cartas);

router.post('/', 
  // #swagger.tags = ['Cartas']
  // #swagger.description = 'Criar uma carta.'
  cartas_controller.cadastrar_carta);

router.put('/:id', 
  // #swagger.tags = ['Cartas']
  // #swagger.description = 'Aterar uma carta.'
  // #swagger.parameters['id'] = { description: 'ID da carta que será alterada.' }
  cartas_controller.atualizar_carta);

router.delete('/:id', 
  // #swagger.tags = ['Cartas']
  // #swagger.description = 'Excluir uma carta.'
  // #swagger.parameters['id'] = { description: 'ID da carta que será excluída.' }
  cartas_controller.excluir_carta);

module.exports = router;