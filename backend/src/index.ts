import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

app.use(morgan('combined'));

app.use('/', (req, res) => {
  res.send('Hello World!!!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
