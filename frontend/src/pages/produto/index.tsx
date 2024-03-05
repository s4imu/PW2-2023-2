import { getAllProdutos } from "@/fakeDb/produtos";
import styles from "./produto.module.css"
import Link from "next/link";

export default function Home() {
  const produtos = getAllProdutos();
  return (
    <div>
     <h1>Produtos</h1>
     <ol>{produtos.map(prod => <li key={prod.id} className={styles.listaProdutos}><Link href={`/produto/${prod.id}`}>{prod.nome}</Link></li>)}</ol>
    </div>
  );
}
