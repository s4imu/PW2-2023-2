import { Router } from 'express';
import languageSchema from 'resources/language/language.schema';
import validate from 'middlewares/validate';
import languageController from './language.controller';

const router = Router();

router.post('/', validate(languageSchema), languageController.changeLanguage);
export default router;