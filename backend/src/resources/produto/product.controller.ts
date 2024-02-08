import { Request, Response } from 'express';
import {
  createProduto,
  listProdutos,
  produtoAlreadyExists,
  readProduto,
} from './product.service';
import { createProdutoDto } from './product.types';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const index = async function (req: Request, res: Response) {
  try {
    const produtos = await listProdutos();
    res.status(StatusCodes.CREATED).json(produtos);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const create = async function (req: Request, res: Response) {
  const produto: createProdutoDto = req.body;
  try {
    if (await produtoAlreadyExists(produto.nome)) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Produto já existe' });
    } else {
      const novoProduto = await createProduto(produto);
      res.status(StatusCodes.CREATED).json(novoProduto);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async function (req: Request, res: Response) {
  const { id } = req.params;
  try {
    const produto = await readProduto(id);
    if (!produto)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(produto);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const update = async function (req: Request, res: Response) {};
const remove = async function (req: Request, res: Response) {};

export default { index, create, read, update, remove };
