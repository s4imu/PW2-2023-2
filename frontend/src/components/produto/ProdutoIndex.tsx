import React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";

import api from "@/utils/api";
import { Produto } from "@/types/produto";
import styles from "./produto.module.css";

function ProdutoIndex() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    api.get("/produto").then((data) => {});
  }, []);
  return (
    <div>
      <h1>Produtos</h1>
      <ol>
        {produtos.map((prod) => (
          <li key={prod.id} className={styles.listaProdutos}>
            <Link href={`/produto/${prod.id}`}>{prod.nome}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProdutoIndex;
