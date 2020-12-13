const { Historia } = require('../models');

exports.lista_historias = async function(req, res, next) {
    const historia = req.params.id == null ? await Historia.findAll().catch(next) : await Historia.findByPk(req.params.id).catch(next)
    return historia == null ? res.status(404).send('História não encontrado') : res.send(historia)
};

exports.cadastrar_historia = async function(req, res, next) {
    return res.send(await Historia.create(req.body).catch(next))
};

exports.atualizar_historia = async function(req, res, next) {
    const historia = await Historia.findByPk(req.params.id).catch(next)
    if (historia != null) {
        historia.Descricao = req.body.Descricao
        await historia.save(req.body).catch(next)
        return res.send(true)
    }
    else 
        return res.status(404).send('História não encontrado')
};

exports.excluir_historia = async function(req, res, next) {
    const historia = await Historia.findByPk(req.params.id).catch(next)
    if (historia != null) {
        await historia.destroy().catch(next)
        return res.send(true)
    }
    else     
        return res.status(404).send('História não encontrado')
};