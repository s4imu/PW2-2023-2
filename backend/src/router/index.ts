import express from 'express';
import produtoRouter from '../resources/produto/product.router';
const router = express.Router();
router.use('/produto', produtoRouter);
export default router;