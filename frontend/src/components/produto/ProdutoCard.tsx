import { getOneProduto } from "@/fakeDb/produtos";
import React from "react"

interface ProdutoCardProps {
    produtoId: number;
}

function ProdutoCard({produtoId}: ProdutoCardProps) {
    const produto = getOneProduto(produtoId)
    if(!produto) return <div>Produto não encontrado</div>
    return <div>ProdutoCard {produto.nome}</div>
}

export default ProdutoCard;