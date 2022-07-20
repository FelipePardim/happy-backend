import express from 'express';
import path from 'path';
import cors from 'cors';

import 'dotenv/config';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

require("dotenv");

const app = express();

const serverPort = process.env.SERVER_LISTEN_PORT;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

try {
 app.listen(process.env.PORT || 3333);
 console.log("Server online");
} catch (error) {
 console.log(error);
}