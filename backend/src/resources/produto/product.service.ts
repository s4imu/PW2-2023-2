import { PrismaClient, Produto } from '@prisma/client';
import { createProdutoDto } from './product.types';

const prisma = new PrismaClient();

export const createProduto = async (
  produto: createProdutoDto,
): Promise<Produto> => {
  return await prisma.produto.create({ data: produto });
};

export const listProdutos = async (): Promise<Produto[]> => {
  return await prisma.produto.findMany();
};
export const produtoAlreadyExists = async (nome: string): Promise<boolean> => {
  return !!(await prisma.produto.findUnique({ where: { nome } }));
};

export const readProduto = async (id: string): Promise<Produto | null> => {
  return await prisma.produto.findUnique({ where: { id } });
};
