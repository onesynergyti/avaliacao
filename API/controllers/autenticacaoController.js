const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const jwt = require('jsonwebtoken');

exports.login = async function(req, res, next) {
//esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.Usuario === 'admin' && req.body.Senha === '123'){
        // Aqui seria validado o usuário e senha e retornado os valores no token
        const id = 1; 
        const token = jwt.sign({ id }, config.APITokenSecret, {
            expiresIn: 36000 // Expira em 1 hora
        });
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
};

exports.logout = async function(req, res, next) {
    app.post('/logout', function(req, res) {
        res.json({ auth: false, token: null });
    })
};