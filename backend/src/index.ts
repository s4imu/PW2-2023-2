import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './router';
import cookieParser from 'cookie-parser';

import validateEnv from './utils/validateEnv';
import setLangCookie from './middlewares/setLangCookie';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
app.use(setLangCookie);
app.use(router);

app.use('/img', express.static(`${__dirname}/../public/img`));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
