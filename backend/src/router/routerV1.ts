import { Router } from 'express';
import produtoRouter from '../resources/produto/product.router'
import exercicioRouter from '../resources/exercicio/exercicio.router'

const router = Router();

router.use("/produto", produtoRouter)
router.use(exercicioRouter)

export default router