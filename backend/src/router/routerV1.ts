import { Router } from 'express';
import produtoRouter from '../resources/produto/product.router'

const router = Router();

router.use(produtoRouter)

export default router