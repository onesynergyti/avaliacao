const { Carta } = require('../models');

exports.lista_cartas = async function(req, res, next) {
    const carta = req.params.id == null ? await Carta.findAll().catch(next) : await Carta.findByPk(req.params.id).catch(next)
    return carta == null ? res.status(404).send('Carta não encontrado') : res.send(carta)
};

exports.cadastrar_carta = async function(req, res, next) {
    return res.send(await Carta.create(req.body).catch(next))
};

exports.atualizar_carta = async function(req, res, next) {
    const carta = await Carta.findByPk(req.params.id).catch(next)
    if (carta != null) {
        carta.Valor = req.body.Valor
        await carta.save(req.body).catch(next)
        return res.send(true)
    }
    else 
        return res.status(404).send('Carta não encontrado')
};

exports.excluir_carta = async function(req, res, next) {
    const carta = await Carta.findByPk(req.params.id).catch(next)
    if (carta != null) {
        await carta.destroy().catch(next)
        return res.send(true)
    }
    else     
        return res.status(404).send('Carta não encontrado')
};