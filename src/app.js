// import { resolve } from 'path';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import './database/index.js';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../doc/swagger_output.json' assert { type: "json" };

import homeRoutes from './routes/homeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/uploads/images/', express.static('../uploads/img'));
    this.app.use('/uploads/docs/', express.static('../uploads/docs'));
    this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
