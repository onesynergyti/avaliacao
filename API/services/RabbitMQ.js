const amqp = require('amqplib/callback_api');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

exports.sendMQ = function(msg) {
    amqp.connect(config.RabbitMQ, function(error0, connection) {
    if (error0) {
      throw error0;
    }

    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      channel.assertExchange('AllVotes', 'fanout', {durable: false})

      channel.publish('AllVotes', '', Buffer.from(msg));
    });
    setTimeout(function() { 
      connection.close(); 
      }, 500);  
  });
}