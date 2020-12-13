const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

const doc = {
  info: {
      version: "1.0.0",
      title: "Documentação do teste",
      description: "Documentação de apresentação do projeto de avaliação"
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json']
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app.js')
})