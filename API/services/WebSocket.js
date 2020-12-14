const WebSocket = require('ws')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];


exports.SendWebSocket = function(mensagem) {
  try {
    const connection = new WebSocket(config.WebSocketUrl)
    connection.onopen = () => {
        connection.send(mensagem)
    }
  }
  catch(ex) {
    console.log('Não foi possível enviar mensagem no WebSocket.')
  }
}