exports.lista_usuarios = async function(req, res, next) {
    const usuario = req.params.id == null ? await Usuario.findAll().catch(next) : await Usuario.findByPk(req.params.id).catch(next)
    return usuario == null ? res.status(404).send('Usuário não encontrado') : res.send(usuario)
};

exports.cadastrar_usuario = async function(req, res, next) {
    return res.send(await Usuario.create(req.body).catch(next))
};

exports.atualizar_usuario = async function(req, res, next) {
    const usuario = await Usuario.findByPk(req.params.id).catch(next)
    if (usuario != null) {
        usuario.Nome = req.body.Nome
        await usuario.save(req.body).catch(next)
        return res.send(true)
    }
    else 
        return res.status(404).send('Usuário não encontrado')
};

exports.excluir_usuario = async function(req, res, next) {
    const usuario = await Usuario.findByPk(req.params.id).catch(next)
    if (usuario != null) {
        await usuario.destroy().catch(next)
        return res.send(true)
    }
    else     
        return res.status(404).send('Usuário não encontrado')
};