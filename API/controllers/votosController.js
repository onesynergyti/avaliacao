const { Voto, Carta, Usuario, Historia} = require('../models');
const WebSocket = require('ws')

exports.lista_voto = async function(req, res, next) {
    const voto = req.params.id == null ? 
        await Voto.findAll(
            {include: [{model: Carta, as: 'Carta'}, 
            {model: Usuario, as: 'Usuario'},
            {model: Historia, as: 'Historia'}]}).catch(next) : 
        await Voto.findByPk(
            req.params.id, 
            {include: [{model: Carta, as: 'Carta'}, 
            {model: Usuario, as: 'Usuario'},
            {model: Historia, as: 'Historia'}]}).catch(next)
    return voto == null ? res.status(404).send('Voto não encontrado') : res.send(voto)
};

exports.cadastrar_voto = async function(req, res, next) {
    const voto = await Voto.create(req.body).catch(next)

    const votoCompleto = await Voto.findByPk(
        req.body.ID, 
        {include: [{model: Carta, as: 'Carta'}, 
        {model: Usuario, as: 'Usuario'},
        {model: Historia, as: 'Historia'}]}).catch(next)

    // Divulga voto no websocket
    const connection = new WebSocket('ws://localhost:9898')
    connection.onopen = () => {
        connection.send(`voto: Um novo voto foi enviado. Carta: ${votoCompleto.Carta.Valor}, Usuário: ${votoCompleto.Usuario.Nome}`)
    }
    return res.send(voto)
};

exports.atualizar_voto = async function(req, res, next) {
    const voto = await Voto.findByPk(req.params.id).catch(next)
    if (voto != null) {
        voto.IDUsuario = req.body.IDUsuario
        voto.IDCarta = req.body.IDCarta
        voto.IDHistoria = req.body.IDHistoria
        await voto.save(voto).catch(next)
        return res.send(true)
    }
    else 
        return res.status(404).send('Voto não encontrado')
};

exports.excluir_voto = async function(req, res, next) {
    const voto = await Voto.findByPk(req.params.id).catch(next)
    if (voto != null) {
        await voto.destroy().catch(next)
        return res.send(true)
    }
    else     
        return res.status(404).send('Voto não encontrado')
};