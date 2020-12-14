const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const jwt = require('jsonwebtoken');

exports.validaJWT = function (req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Nenhum token foi informado.' });
    
    jwt.verify(token, config.APITokenSecret, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Token inválido.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}