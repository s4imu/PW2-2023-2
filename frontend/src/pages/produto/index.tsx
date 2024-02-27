import { getAllProdutos } from "@/fakeDb/produtos";
import styles from "./produto.module.css"

export default function Home() {
  const produtos = getAllProdutos();
  return (
    <div>
     <h1>Produtos</h1>
     <ol>{produtos.map(prod => <li className={styles.listaProdutos}>{prod.nome}</li>)}</ol>
    </div>
  );
}
