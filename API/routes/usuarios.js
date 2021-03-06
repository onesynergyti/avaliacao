const express = require('express');
const router = express.Router();
var usuarios_controller = require('../controllers/usuariosController');
const helper_autoricacao = require('../helpers/validacaoJWT');

router.get('/:id?', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Obter um ou vários usuários.'
  // #swagger.parameters['id?'] = { description: 'ID do usuário como filtro opcional.' }
  usuarios_controller.lista_usuarios);

router.post('/', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Criar um usuário.'
  usuarios_controller.cadastrar_usuario);

router.put('/:id', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Alterar um usuário.'
  // #swagger.parameters['id'] = { description: 'ID do usuário que deve ser alterado.' }
  usuarios_controller.atualizar_usuario);

router.delete('/:id', helper_autoricacao.validaJWT,
  // #swagger.tags = ['Usuários']
  // #swagger.description = 'Excluir um usuário.'
  // #swagger.parameters['id'] = { description: 'ID do usuário que deve ser excluído.' }
  usuarios_controller.excluir_usuario);

module.exports = router;