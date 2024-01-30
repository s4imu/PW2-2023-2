import { Request, Response } from 'express';
import  {createProduto, listProdutos, produtoAlreadyExists}  from './product.service'

const index = async function (req: Request, res: Response) {
    try {
        const produtos = await listProdutos()
        res.status(201).json(produtos)
    } catch(err) {
        res.status(500).json(err);
    }
}
const create =async function (req: Request, res: Response) {
    const produto =  req.body
    try {
        if(await produtoAlreadyExists(produto.name)){
            res.status(400).json({ msg: "Produto já existe"})
        } else {
        const novoProduto = await createProduto(produto)
        res.status(201).json(novoProduto)
    }} catch(err) {
        res.status(500).json(err);
    }
}
const read = async function (req: Request, res: Response) {}
const update = async function (req: Request, res: Response) {}
const remove = async function (req: Request, res: Response) {}

export default {index, create, read, update,  remove}
