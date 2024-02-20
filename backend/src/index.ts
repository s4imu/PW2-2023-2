import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './router';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';

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
app.use(
  session({
    genid: (req) => uuidv4(),
    secret: 'Hi9Cf#mK9Dm#@SmA76#4MP2sm@18',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(router);

app.use('/img', express.static(`${__dirname}/../public/img`));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
