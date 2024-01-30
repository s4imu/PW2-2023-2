import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './router/router';

import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

app.use(morgan('combined'));

app.use('/img', express.static(`${__dirname}/../public/img`));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
