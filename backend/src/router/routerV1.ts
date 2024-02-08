import { Router } from 'express';
import produtoRouter from '../resources/produto/product.router'
import exercicioRouter from '../resources/exercicio/exercicio.router'
import languageRouter from '../resources/language/language.router'
const router = Router();

router.use("/produto", produtoRouter)
router.use("/language", languageRouter)
router.use(exercicioRouter)

export default router