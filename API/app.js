const express = require('express');
const port = 3000;
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const usuariosRouter = require('./routes/usuarios');
const cartasRouter = require('./routes/cartas');
const historiasRouter = require('./routes/historias');
const votosRouter = require('./routes/votos');
const autenticacaoRouter = require('./routes/autenticacao');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/usuarios', usuariosRouter);
app.use('/cartas', cartasRouter);
app.use('/historias', historiasRouter);
app.use('/votos', votosRouter);
app.use('/autenticacao', autenticacaoRouter);

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))