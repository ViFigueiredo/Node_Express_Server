import swaggerAutogen from 'swagger-autogen';
import * as dotenv from 'dotenv';

dotenv.config();

const doc = {
  info: {
    version: '3.0.0', // by default: '1.0.0'
    title: 'Template Node Server API', // by default: 'REST API'
    description: 'Utilizando Express, Sequelize e Postgres', // by default: ''
  },
  host: `localhost:${process.env.APP_PORT}`, // by default: 'localhost:3000'
  // basePath: '', // by default: '/'
  // schemes: [], // by default: ['http']
  // consumes: [], // by default: ['application/json']
  // produces: [], // by default: ['application/json']
  // tags: [ // by default: empty Array
  //   {
  //     name: '', // Tag name
  //     description: '', // Tag description
  //   },
  //   // { ... }
  // ],
  // securityDefinitions: {}, // by default: empty object
  // definitions: {}, // by default: empty object (Swagger 2.0)
  // components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['../src/app.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import('../src/server.js');
});
